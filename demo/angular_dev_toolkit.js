#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');
const https = require('https');

/**
 * Angular Development Troubleshooting Toolkit
 * 
 * This demo script automates common troubleshooting tasks that Angular developers
 * face during development, based on real-world scenarios from the Broadcom project.
 * 
 * Features:
 * - Environment compatibility validation
 * - Dependency health checks and auto-fixes
 * - Project configuration diagnostics
 * - Port conflict resolution
 * - Development server management
 * - Build process automation with error recovery
 */

class AngularDevToolkit {
    constructor(projectPath = '.') {
        this.projectPath = path.resolve(projectPath);
        this.logFile = path.join(this.projectPath, 'troubleshooting.log');
        this.packageJsonPath = path.join(this.projectPath, 'package.json');
        this.angularJsonPath = path.join(this.projectPath, 'angular.json');
        this.tsconfigPath = path.join(this.projectPath, 'tsconfig.app.json');
        
        // Initialize logging
        this.initializeLogging();
    }

    initializeLogging() {
        const timestamp = new Date().toISOString();
        const separator = '='.repeat(80);
        this.log('INFO', `${separator}`);
        this.log('INFO', `Angular Development Toolkit - Started at ${timestamp}`);
        this.log('INFO', `Project Path: ${this.projectPath}`);
        this.log('INFO', `${separator}`);
    }

    log(level, message, error = null) {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} [${level}] ${message}`;
        
        console.log(logEntry);
        
        try {
            fs.appendFileSync(this.logFile, logEntry + '\n');
            if (error) {
                fs.appendFileSync(this.logFile, `Stack: ${error.stack}\n`);
            }
        } catch (e) {
            console.error('Failed to write to log file:', e.message);
        }
    }

    // 1. Environment Compatibility Validation
    async validateEnvironment() {
        this.log('INFO', '🔍 Validating development environment...');
        
        try {
            // Check Node.js version
            const nodeVersion = process.version;
            const nodeMajor = parseInt(nodeVersion.slice(1).split('.')[0]);
            this.log('INFO', `Node.js version: ${nodeVersion}`);
            
            // Check if Angular CLI is installed
            let angularVersion = 'Not installed';
            try {
                angularVersion = execSync('ng version --skip-confirmation', { encoding: 'utf8' });
                this.log('INFO', 'Angular CLI is installed');
            } catch (e) {
                this.log('ERROR', 'Angular CLI not found. Installing globally...');
                try {
                    execSync('npm install -g @angular/cli@16', { stdio: 'inherit' });
                    this.log('INFO', 'Angular CLI installed successfully');
                } catch (installError) {
                    this.log('ERROR', 'Failed to install Angular CLI', installError);
                    return false;
                }
            }

            // Validate compatibility based on documented issues
            if (this.packageJsonExists()) {
                const packageJson = this.readPackageJson();
                const angularCoreVersion = packageJson.dependencies['@angular/core'];
                
                if (angularCoreVersion) {
                    const angularMajor = parseInt(angularCoreVersion.replace(/[\^~]/, '').split('.')[0]);
                    
                    // Based on diary entry: Angular 17 requires Node 20+, Angular 16 works with Node 19
                    if (angularMajor >= 17 && nodeMajor < 20) {
                        this.log('WARNING', `Version incompatibility detected! Angular ${angularMajor} requires Node.js 20+, but you have ${nodeVersion}`);
                        this.log('INFO', 'Recommendation: Downgrade Angular to version 16 or upgrade Node.js');
                        return false;
                    } else if (angularMajor === 16 && nodeMajor < 16) {
                        this.log('WARNING', `Angular 16 requires Node.js 16+, but you have ${nodeVersion}`);
                        return false;
                    } else {
                        this.log('SUCCESS', '✅ Environment compatibility validated');
                        return true;
                    }
                }
            }
            
            return true;
        } catch (error) {
            this.log('ERROR', 'Environment validation failed', error);
            return false;
        }
    }

    // 2. Dependency Health Check and Auto-Fix
    async validateDependencies() {
        this.log('INFO', '📦 Validating project dependencies...');
        
        try {
            if (!this.packageJsonExists()) {
                this.log('ERROR', 'package.json not found');
                return false;
            }

            // Check if node_modules exists
            const nodeModulesPath = path.join(this.projectPath, 'node_modules');
            if (!fs.existsSync(nodeModulesPath)) {
                this.log('WARNING', 'node_modules directory not found. Installing dependencies...');
                await this.installDependencies();
            }

            // Validate package-lock.json exists
            const packageLockPath = path.join(this.projectPath, 'package-lock.json');
            if (!fs.existsSync(packageLockPath)) {
                this.log('WARNING', 'package-lock.json not found. This may cause dependency issues.');
            }

            // Check for known problematic dependencies
            const packageJson = this.readPackageJson();
            const issues = this.detectDependencyIssues(packageJson);
            
            if (issues.length > 0) {
                this.log('WARNING', `Found ${issues.length} dependency issues:`);
                issues.forEach(issue => this.log('WARNING', `  - ${issue}`));
                
                // Auto-fix common issues
                await this.fixDependencyIssues();
            }

            this.log('SUCCESS', '✅ Dependencies validated');
            return true;
        } catch (error) {
            this.log('ERROR', 'Dependency validation failed', error);
            return false;
        }
    }

    // 3. Project Configuration Diagnostics
    async validateProjectConfiguration() {
        this.log('INFO', '⚙️  Validating project configuration...');
        
        try {
            const issues = [];

            // Check angular.json
            if (!fs.existsSync(this.angularJsonPath)) {
                issues.push('angular.json missing');
            } else {
                const angularConfig = this.readAngularJson();
                const configIssues = this.validateAngularConfig(angularConfig);
                issues.push(...configIssues);
            }

            // Check tsconfig.app.json (from diary: this was a critical issue)
            if (!fs.existsSync(this.tsconfigPath)) {
                issues.push('tsconfig.app.json missing');
            } else {
                const tsconfigIssues = this.validateTsConfig();
                issues.push(...tsconfigIssues);
            }

            // Check for polyfills.ts (critical for Angular 16 downgrade)
            const polyfillsPath = path.join(this.projectPath, 'src', 'polyfills.ts');
            if (!fs.existsSync(polyfillsPath)) {
                issues.push('polyfills.ts missing (required for Angular 16)');
                await this.createPolyfillsFile();
            }

            // Check main.ts
            const mainTsPath = path.join(this.projectPath, 'src', 'main.ts');
            if (!fs.existsSync(mainTsPath)) {
                issues.push('src/main.ts missing');
            }

            if (issues.length > 0) {
                this.log('WARNING', `Found ${issues.length} configuration issues:`);
                issues.forEach(issue => this.log('WARNING', `  - ${issue}`));
                return false;
            }

            this.log('SUCCESS', '✅ Project configuration validated');
            return true;
        } catch (error) {
            this.log('ERROR', 'Configuration validation failed', error);
            return false;
        }
    }

    // 4. Port Management and Process Cleanup
    async manageDevServer() {
        this.log('INFO', '🌐 Managing development server...');
        
        try {
            const defaultPort = 4200;
            
            // Check if port is in use
            const portInUse = await this.isPortInUse(defaultPort);
            if (portInUse) {
                this.log('WARNING', `Port ${defaultPort} is already in use`);
                
                // Try to kill existing Angular processes (from diary solution)
                this.log('INFO', 'Attempting to stop existing Angular processes...');
                try {
                    execSync('pkill -f "ng serve"', { stdio: 'pipe' });
                    this.log('INFO', 'Existing Angular processes terminated');
                    await this.sleep(2000); // Wait for cleanup
                } catch (e) {
                    this.log('INFO', 'No existing Angular processes found or failed to terminate');
                }
                
                // Check if port is now free
                const stillInUse = await this.isPortInUse(defaultPort);
                if (stillInUse) {
                    this.log('WARNING', 'Port still in use, will try alternative port');
                    return await this.startDevServer(4201);
                }
            }

            return await this.startDevServer(defaultPort);
        } catch (error) {
            this.log('ERROR', 'Development server management failed', error);
            return false;
        }
    }

    // 5. Build Process Automation with Error Recovery
    async validateBuildProcess() {
        this.log('INFO', '🔨 Validating build process...');
        
        try {
            this.log('INFO', 'Running development build...');
            const buildResult = await this.runBuild();
            
            if (buildResult.success) {
                this.log('SUCCESS', '✅ Build completed successfully');
                return true;
            } else {
                this.log('ERROR', 'Build failed. Attempting error recovery...');
                return await this.recoverFromBuildFailure(buildResult.error);
            }
        } catch (error) {
            this.log('ERROR', 'Build validation failed', error);
            return false;
        }
    }

    // Helper Methods
    packageJsonExists() {
        return fs.existsSync(this.packageJsonPath);
    }

    readPackageJson() {
        try {
            return JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));
        } catch (error) {
            this.log('ERROR', 'Failed to read package.json', error);
            return null;
        }
    }

    readAngularJson() {
        try {
            return JSON.parse(fs.readFileSync(this.angularJsonPath, 'utf8'));
        } catch (error) {
            this.log('ERROR', 'Failed to read angular.json', error);
            return null;
        }
    }

    detectDependencyIssues(packageJson) {
        const issues = [];
        
        // Check for peer dependency warnings
        if (packageJson.dependencies && packageJson.devDependencies) {
            const angular = packageJson.dependencies['@angular/core'];
            const angularCli = packageJson.devDependencies['@angular/cli'];
            
            if (angular && angularCli) {
                const angularMajor = parseInt(angular.replace(/[\^~]/, '').split('.')[0]);
                const cliMajor = parseInt(angularCli.replace(/[\^~]/, '').split('.')[0]);
                
                if (angularMajor !== cliMajor) {
                    issues.push(`Angular version mismatch: Core v${angularMajor}, CLI v${cliMajor}`);
                }
            }
        }
        
        return issues;
    }

    async installDependencies() {
        try {
            this.log('INFO', 'Installing dependencies with --legacy-peer-deps (from diary solution)...');
            execSync('npm install --legacy-peer-deps', { 
                stdio: 'inherit', 
                cwd: this.projectPath 
            });
            this.log('SUCCESS', 'Dependencies installed successfully');
        } catch (error) {
            this.log('ERROR', 'Failed to install dependencies', error);
            throw error;
        }
    }

    async fixDependencyIssues() {
        this.log('INFO', 'Attempting to fix dependency issues...');
        
        try {
            // Clear npm cache
            execSync('npm cache clean --force', { stdio: 'pipe' });
            
            // Reinstall with legacy peer deps (solution from diary)
            await this.installDependencies();
            
            this.log('SUCCESS', 'Dependency issues resolved');
        } catch (error) {
            this.log('ERROR', 'Failed to fix dependency issues', error);
        }
    }

    validateAngularConfig(config) {
        const issues = [];
        
        if (!config || !config.projects) {
            issues.push('Invalid angular.json structure');
            return issues;
        }

        const projectName = Object.keys(config.projects)[0];
        const project = config.projects[projectName];
        
        // Check build configuration (from diary: needed to change from 'application' to 'browser')
        if (project.architect && project.architect.build) {
            const builder = project.architect.build.builder;
            if (!builder.includes('browser') && !builder.includes('application')) {
                issues.push('Unexpected build builder configuration');
            }
        }
        
        return issues;
    }

    validateTsConfig() {
        const issues = [];
        
        try {
            const tsconfig = JSON.parse(fs.readFileSync(this.tsconfigPath, 'utf8'));
            
            // Check if polyfills is included (critical issue from diary)
            const files = tsconfig.files || [];
            const includes = tsconfig.include || [];
            
            if (!files.includes('src/polyfills.ts') && !includes.some(inc => inc.includes('polyfills'))) {
                issues.push('polyfills.ts not included in TypeScript compilation');
            }
            
        } catch (error) {
            issues.push('Failed to parse tsconfig.app.json');
        }
        
        return issues;
    }

    async createPolyfillsFile() {
        const polyfillsPath = path.join(this.projectPath, 'src', 'polyfills.ts');
        const polyfillsContent = `/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 */

import 'zone.js/dist/zone';  // Included with Angular CLI.
`;
        
        try {
            fs.writeFileSync(polyfillsPath, polyfillsContent);
            this.log('SUCCESS', 'Created polyfills.ts file');
        } catch (error) {
            this.log('ERROR', 'Failed to create polyfills.ts', error);
        }
    }

    async isPortInUse(port) {
        return new Promise((resolve) => {
            const net = require('net');
            const server = net.createServer();
            
            server.listen(port, () => {
                server.close();
                resolve(false);
            });
            
            server.on('error', () => {
                resolve(true);
            });
        });
    }

    async startDevServer(port) {
        try {
            this.log('INFO', `Starting development server on port ${port}...`);
            
            // Start server in background
            const child = exec(`ng serve --port ${port}`, { cwd: this.projectPath });
            
            // Wait for server to start
            await this.sleep(5000);
            
            // Test if server is responding
            const isRunning = await this.testServerHealth(port);
            if (isRunning) {
                this.log('SUCCESS', `✅ Development server running on http://localhost:${port}`);
                return true;
            } else {
                this.log('ERROR', 'Development server failed to start properly');
                return false;
            }
        } catch (error) {
            this.log('ERROR', 'Failed to start development server', error);
            return false;
        }
    }

    async testServerHealth(port) {
        return new Promise((resolve) => {
            const http = require('http');
            const req = http.get(`http://localhost:${port}`, (res) => {
                resolve(res.statusCode === 200);
            });
            
            req.on('error', () => {
                resolve(false);
            });
            
            req.setTimeout(3000, () => {
                req.abort();
                resolve(false);
            });
        });
    }

    async runBuild() {
        return new Promise((resolve) => {
            exec('ng build --configuration development', { cwd: this.projectPath }, (error, stdout, stderr) => {
                if (error) {
                    resolve({ success: false, error: error.message, stdout, stderr });
                } else {
                    resolve({ success: true, stdout, stderr });
                }
            });
        });
    }

    async recoverFromBuildFailure(errorMessage) {
        this.log('INFO', 'Analyzing build failure...');
        
        if (errorMessage.includes('polyfills')) {
            this.log('INFO', 'Polyfills issue detected. Creating missing file...');
            await this.createPolyfillsFile();
            return await this.runBuild();
        }
        
        if (errorMessage.includes('Cannot find module')) {
            this.log('INFO', 'Missing dependencies detected. Reinstalling...');
            await this.installDependencies();
            return await this.runBuild();
        }
        
        this.log('ERROR', 'Unable to automatically recover from build failure');
        return { success: false };
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Main diagnostic runner
    async runFullDiagnostics() {
        this.log('INFO', '🚀 Starting comprehensive Angular development diagnostics...');
        
        const results = {
            environment: false,
            dependencies: false,
            configuration: false,
            server: false,
            build: false
        };

        try {
            // Run all validations
            results.environment = await this.validateEnvironment();
            results.dependencies = await this.validateDependencies();
            results.configuration = await this.validateProjectConfiguration();
            results.build = await this.validateBuildProcess();
            results.server = await this.manageDevServer();

            // Generate summary report
            this.generateSummaryReport(results);
            
            return results;
        } catch (error) {
            this.log('ERROR', 'Diagnostics failed', error);
            return results;
        }
    }

    generateSummaryReport(results) {
        const separator = '='.repeat(80);
        this.log('INFO', separator);
        this.log('INFO', '📊 DIAGNOSTIC SUMMARY REPORT');
        this.log('INFO', separator);
        
        const checks = [
            { name: 'Environment Compatibility', status: results.environment },
            { name: 'Dependencies Health', status: results.dependencies },
            { name: 'Project Configuration', status: results.configuration },
            { name: 'Build Process', status: results.build },
            { name: 'Development Server', status: results.server }
        ];

        checks.forEach(check => {
            const status = check.status ? '✅ PASS' : '❌ FAIL';
            this.log('INFO', `${check.name.padEnd(25)} ${status}`);
        });

        const passCount = checks.filter(c => c.status).length;
        const totalCount = checks.length;
        
        this.log('INFO', separator);
        this.log('INFO', `Overall Health: ${passCount}/${totalCount} checks passed`);
        
        if (passCount === totalCount) {
            this.log('SUCCESS', '🎉 All diagnostics passed! Your Angular project is healthy.');
        } else {
            this.log('WARNING', '⚠️  Some issues detected. Check the logs above for details.');
        }
        
        this.log('INFO', `Full log available at: ${this.logFile}`);
        this.log('INFO', separator);
    }
}

// CLI Interface
if (require.main === module) {
    const args = process.argv.slice(2);
    const projectPath = args[0] || '.';
    
    console.log('🔧 Angular Development Troubleshooting Toolkit');
    console.log('Based on real-world issues from Broadcom Angular project development\n');
    
    const toolkit = new AngularDevToolkit(projectPath);
    
    toolkit.runFullDiagnostics().then(results => {
        const exitCode = Object.values(results).every(Boolean) ? 0 : 1;
        process.exit(exitCode);
    }).catch(error => {
        console.error('Toolkit execution failed:', error);
        process.exit(1);
    });
}

module.exports = AngularDevToolkit; 