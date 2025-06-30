import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="hero py-5">
      <div class="container">
        <div class="text-center">
          <h1>Enterprise Solutions</h1>
          <p class="hero-subtitle">
            Comprehensive software solutions designed to accelerate digital transformation 
            and optimize enterprise operations across all infrastructure types.
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="solutions-grid py-5">
      <div class="container">
        <div class="row">
          <div class="col-4" *ngFor="let solution of solutions">
            <div class="solution-card card">
              <div class="solution-header">
                <div class="solution-icon" [style.background-color]="solution.color">
                  {{ solution.icon }}
                </div>
                <h3>{{ solution.title }}</h3>
              </div>
              <p>{{ solution.description }}</p>
              <ul class="solution-features">
                <li *ngFor="let feature of solution.features">{{ feature }}</li>
              </ul>
              <div class="solution-products">
                <h5>Key Products:</h5>
                <div class="product-tags">
                  <span *ngFor="let product of solution.products" class="product-tag">
                    {{ product }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits py-5" style="background: var(--broadcom-light-gray);">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Why Choose Broadcom Solutions?</h2>
        </div>
        <div class="row">
          <div class="col-6" *ngFor="let benefit of benefits">
            <div class="benefit-item">
              <div class="benefit-icon">{{ benefit.icon }}</div>
              <div class="benefit-content">
                <h4>{{ benefit.title }}</h4>
                <p>{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, var(--broadcom-red) 0%, #a00525 100%);
      color: var(--broadcom-white);
    }

    .hero h1 {
      color: var(--broadcom-white);
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 0 auto;
      opacity: 0.9;
    }

    .solution-card {
      height: 100%;
      padding: 2rem;
    }

    .solution-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .solution-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      margin-right: 1rem;
    }

    .solution-features {
      list-style: none;
      margin: 1.5rem 0;
    }

    .solution-features li {
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .solution-features li:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--broadcom-red);
      font-weight: bold;
    }

    .solution-products h5 {
      margin-bottom: 1rem;
      color: var(--broadcom-dark-gray);
    }

    .product-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .product-tag {
      background: var(--broadcom-gray);
      color: var(--broadcom-dark-gray);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .benefit-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .benefit-icon {
      font-size: 3rem;
      margin-right: 1.5rem;
      margin-top: 0.5rem;
    }

    .benefit-content h4 {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .solution-header {
        flex-direction: column;
        text-align: center;
      }

      .solution-icon {
        margin-right: 0;
        margin-bottom: 1rem;
      }

      .benefit-item {
        text-align: center;
        flex-direction: column;
      }

      .benefit-icon {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  `]
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'Enterprise Software',
      description: 'Distributed, SaaS, and security solutions to plan, develop, test, secure, release, monitor, and manage enterprise digital services.',
      icon: 'ES',
      color: 'var(--broadcom-red)',
      features: [
        'DevOps & Continuous Delivery',
        'Application Performance Monitoring',
        'API Management & Security',
        'Test Automation & Quality',
        'IT Service Management'
      ],
      products: ['CA Workload Automation', 'CA API Gateway', 'CA Application Performance Management', 'CA Test Data Manager']
    },
    {
      title: 'Mainframe Software',
      description: 'Comprehensive mainframe software including automation, management, DevOps, and security for mission-critical systems.',
      icon: 'MF',
      color: 'var(--broadcom-blue)',
      features: [
        'Workload Automation',
        'Database Management',
        'Security & Compliance',
        'Performance Optimization',
        'DevOps Integration'
      ],
      products: ['CA 7 Workload Automation', 'CA IDMS', 'CA Top Secret', 'CA SYSVIEW Performance Management']
    },
    {
      title: 'VMware Solutions',
      description: 'VMware Cloud Foundation and infrastructure software for software-defined data centers and hybrid cloud environments.',
      icon: 'VM',
      color: '#607078',
      features: [
        'Cloud Infrastructure',
        'Virtualization Platform',
        'Networking & Security',
        'Container Management',
        'Hybrid Cloud Operations'
      ],
      products: ['VMware vSphere', 'VMware NSX', 'VMware vSAN', 'VMware Tanzu']
    }
  ];

  benefits = [
    {
      title: 'Proven Enterprise Scale',
      description: 'Trusted by 95% of Fortune 100 companies to run their most critical business processes and infrastructure.',
      icon: '🏢'
    },
    {
      title: 'Comprehensive Integration',
      description: 'Seamlessly integrate across hybrid environments with support for mainframe, distributed, and cloud platforms.',
      icon: '🔗'
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security features with comprehensive threat protection and compliance capabilities.',
      icon: '🔒'
    },
    {
      title: 'Innovation Leadership',
      description: 'Continuous innovation with AI-powered capabilities, automation, and modern development practices.',
      icon: '💡'
    }
  ];
} 