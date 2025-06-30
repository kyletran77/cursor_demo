#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Create console logger that also writes to file
const logFile = fs.createWriteStream('demo/logging/javascript_errors.log', { flags: 'a' });

function log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${level} - ${message}\n`;
    console.log(logMessage.trim());
    logFile.write(logMessage);
}

class BuggyWebApp {
    constructor() {
        this.config = null;
        this.users = [];
        this.apiEndpoints = [];
    }

    // This will cause reference errors
    loadConfiguration() {
        log('INFO', 'Loading web application configuration...');
        try {
            // Trying to access undefined variable
            const configPath = nonExistentVariable.configPath;
            this.config = require(configPath);
        } catch (error) {
            log('ERROR', `Configuration loading failed: ${error.message}`);
            throw error;
        }
    }

    // This will cause type errors
    processUserData(userData) {
        log('INFO', 'Processing user data...');
        try {
            // Trying to call method on undefined
            const processedUsers = userData.map(user => {
                return {
                    id: user.id,
                    name: user.name.toUpperCase(), // Will fail if name is null/undefined
                    email: user.email.toLowerCase(),
                    age: parseInt(user.age),
                    preferences: user.preferences.split(','), // Will fail if preferences is not string
                    lastLogin: new Date(user.lastLogin),
                    avatar: user.profile.avatar.url // Nested property access that will fail
                };
            });
            return processedUsers;
        } catch (error) {
            log('ERROR', `User data processing failed: ${error.message}`);
            throw error;
        }
    }

    // This will cause async/promise errors
    async fetchExternalData() {
        log('INFO', 'Fetching data from external APIs...');
        try {
            const promises = this.apiEndpoints.map(async (endpoint) => {
                return new Promise((resolve, reject) => {
                    const req = https.get(endpoint.url, (res) => {
                        let data = '';
                        res.on('data', (chunk) => {
                            data += chunk;
                        });
                        res.on('end', () => {
                            try {
                                // This might fail if response is not JSON
                                const jsonData = JSON.parse(data);
                                resolve(jsonData);
                            } catch (parseError) {
                                reject(new Error(`JSON parsing failed for ${endpoint.url}: ${parseError.message}`));
                            }
                        });
                    });
                    
                    req.on('error', (error) => {
                        reject(new Error(`Request failed for ${endpoint.url}: ${error.message}`));
                    });
                    
                    // Set a very short timeout to force timeout errors
                    req.setTimeout(100, () => {
                        req.abort();
                        reject(new Error(`Request timeout for ${endpoint.url}`));
                    });
                });
            });

            const results = await Promise.all(promises);
            return results;
        } catch (error) {
            log('ERROR', `External data fetching failed: ${error.message}`);
            throw error;
        }
    }

    // This will cause array/object manipulation errors
    generateReport(data) {
        log('INFO', 'Generating application report...');
        try {
            const report = {
                totalUsers: data.length,
                averageAge: data.reduce((sum, user) => sum + user.age, 0) / data.length,
                // This will fail if some users don't have the property
                premiumUsers: data.filter(user => user.subscription.isPremium),
                // This will cause issues with null/undefined dates
                recentLogins: data.filter(user => {
                    const daysSinceLogin = (Date.now() - user.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
                    return daysSinceLogin < 7;
                }),
                // This will fail with null reference
                topCountries: data.reduce((acc, user) => {
                    const country = user.address.country;
                    acc[country] = (acc[country] || 0) + 1;
                    return acc;
                }, {})
            };
            return report;
        } catch (error) {
            log('ERROR', `Report generation failed: ${error.message}`);
            throw error;
        }
    }

    // This will cause file system errors
    saveReport(report, filename) {
        log('INFO', `Saving report to ${filename}...`);
        try {
            // Try to write to a directory that doesn't exist
            const invalidPath = path.join('/nonexistent/directory', filename);
            fs.writeFileSync(invalidPath, JSON.stringify(report, null, 2));
            log('INFO', 'Report saved successfully');
        } catch (error) {
            log('ERROR', `Report saving failed: ${error.message}`);
            throw error;
        }
    }
}

// Main execution with intentional errors
async function main() {
    log('INFO', '=== Starting Buggy JavaScript Application Demo ===');
    
    const app = new BuggyWebApp();
    
    // Set up some invalid API endpoints
    app.apiEndpoints = [
        { url: 'https://jsonplaceholder.typicode.com/nonexistent' },
        { url: 'https://api.invalid-domain-12345.com/data' },
        { url: 'https://httpstat.us/500' } // This will return 500 error
    ];

    try {
        // This will fail - undefined variable
        app.loadConfiguration();
    } catch (error) {
        log('CRITICAL', `Configuration error: ${error.stack}`);
    }

    try {
        // This will fail - processing invalid user data
        const badUserData = [
            { id: 1, name: null, email: 'USER@EXAMPLE.COM', age: '25', preferences: null },
            { id: 2, name: 'Jane', email: null, age: 'invalid', preferences: 'music,movies' },
            { id: 3 } // Missing most properties
        ];
        
        const processedUsers = app.processUserData(badUserData);
        
        // This will fail - generating report with bad data
        const report = app.generateReport(processedUsers);
        
        // This will fail - saving to invalid path
        app.saveReport(report, 'user_report.json');
        
    } catch (error) {
        log('CRITICAL', `Application error: ${error.stack}`);
    }

    try {
        // This will fail - network errors
        const externalData = await app.fetchExternalData();
        log('INFO', `Fetched ${externalData.length} external data sources`);
    } catch (error) {
        log('CRITICAL', `External data error: ${error.stack}`);
    }

    // Intentional memory leak simulation
    const memoryLeakArray = [];
    for (let i = 0; i < 100000; i++) {
        memoryLeakArray.push({
            id: i,
            data: new Array(1000).fill('memory leak data'),
            timestamp: new Date(),
            references: memoryLeakArray // Circular reference
        });
    }

    log('WARNING', `Created potential memory leak with ${memoryLeakArray.length} objects`);
    log('INFO', '=== Buggy JavaScript Application Demo Completed ===');
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    log('FATAL', `Uncaught Exception: ${error.stack}`);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    log('FATAL', `Unhandled Rejection at: ${promise}, reason: ${reason}`);
    process.exit(1);
});

if (require.main === module) {
    main().catch((error) => {
        log('FATAL', `Main function error: ${error.stack}`);
        process.exit(1);
    });
} 