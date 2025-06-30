import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="hero py-5">
      <div class="container">
        <div class="text-center">
          <h1>Products & Technologies</h1>
          <p class="hero-subtitle">
            Industry-leading software products that power the world's most critical enterprise environments.
          </p>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="product-categories py-5">
      <div class="container">
        <div class="row">
          <div class="col-4" *ngFor="let category of productCategories">
            <div class="category-card card">
              <div class="category-icon" [style.background-color]="category.color">
                {{ category.icon }}
              </div>
              <h3>{{ category.name }}</h3>
              <p>{{ category.description }}</p>
              <div class="product-count">{{ category.productCount }} Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products py-5" style="background: var(--broadcom-light-gray);">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Featured Products</h2>
        </div>
        <div class="row">
          <div class="col-6" *ngFor="let product of featuredProducts">
            <div class="product-card">
              <div class="product-header">
                <h4>{{ product.name }}</h4>
                <span class="product-category" [style.background-color]="product.categoryColor">
                  {{ product.category }}
                </span>
              </div>
              <p>{{ product.description }}</p>
              <div class="product-features">
                <h6>Key Features:</h6>
                <ul>
                  <li *ngFor="let feature of product.features">{{ feature }}</li>
                </ul>
              </div>
              <div class="product-benefits">
                <h6>Benefits:</h6>
                <div class="benefit-tags">
                  <span *ngFor="let benefit of product.benefits" class="benefit-tag">
                    {{ benefit }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, var(--broadcom-blue) 0%, #007091 100%);
      color: var(--broadcom-white);
    }

    .hero h1 {
      color: var(--broadcom-white);
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      max-width: 700px;
      margin: 0 auto;
      opacity: 0.9;
    }

    .category-card {
      text-align: center;
      padding: 2.5rem 1.5rem;
      height: 100%;
      transition: transform 0.3s ease;
    }

    .category-card:hover {
      transform: translateY(-5px);
    }

    .category-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: white;
      font-size: 2rem;
      font-weight: bold;
    }

    .product-count {
      color: var(--broadcom-blue);
      font-weight: 600;
      margin-top: 1rem;
    }

    .product-card {
      background: var(--broadcom-white);
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      height: 100%;
    }

    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .product-header h4 {
      margin: 0;
      flex: 1;
    }

    .product-category {
      color: var(--broadcom-white);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
      margin-left: 1rem;
    }

    .product-features,
    .product-benefits {
      margin-top: 1.5rem;
    }

    .product-features h6,
    .product-benefits h6 {
      margin-bottom: 0.75rem;
      color: var(--broadcom-dark-gray);
      font-weight: 600;
    }

    .product-features ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .product-features li {
      padding: 0.25rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .product-features li:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--broadcom-red);
      font-weight: bold;
    }

    .benefit-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .benefit-tag {
      background: var(--broadcom-gray);
      color: var(--broadcom-dark-gray);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .product-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .product-category {
        margin-left: 0;
        margin-top: 0.5rem;
      }
    }
  `]
})
export class ProductsComponent {
  productCategories = [
    {
      name: 'Enterprise Software',
      description: 'Comprehensive distributed software solutions for modern enterprises.',
      icon: 'ES',
      color: 'var(--broadcom-red)',
      productCount: 25
    },
    {
      name: 'Mainframe Software',
      description: 'Mission-critical mainframe solutions for automation and management.',
      icon: 'MF',
      color: 'var(--broadcom-blue)',
      productCount: 18
    },
    {
      name: 'Security Solutions',
      description: 'Advanced cybersecurity and threat protection technologies.',
      icon: 'SEC',
      color: '#28a745',
      productCount: 12
    }
  ];

  featuredProducts = [
    {
      name: 'CA Workload Automation DE',
      category: 'Automation',
      categoryColor: 'var(--broadcom-red)',
      description: 'Comprehensive workload automation solution for managing complex business processes across distributed environments with advanced scheduling and monitoring capabilities.',
      features: [
        'Cross-platform job scheduling',
        'Event-driven automation',
        'REST API integration',
        'Real-time monitoring',
        'Scalable architecture'
      ],
      benefits: ['Reduced Downtime', 'Improved Efficiency', 'Cost Savings', 'Compliance']
    },
    {
      name: 'VMware vSphere',
      category: 'Virtualization',
      categoryColor: '#607078',
      description: 'Industry-leading virtualization platform that transforms data centers into simplified cloud computing infrastructures with advanced resource management.',
      features: [
        'High availability clustering',
        'Live migration (vMotion)',
        'Resource pooling',
        'Security hardening',
        'Performance optimization'
      ],
      benefits: ['Hardware Efficiency', 'Flexibility', 'Disaster Recovery', 'Security']
    },
    {
      name: 'Symantec Endpoint Security',
      category: 'Security',
      categoryColor: '#28a745',
      description: 'Advanced threat protection that combines multiple layers of protection to secure endpoints against sophisticated attacks and zero-day threats.',
      features: [
        'Machine learning detection',
        'Behavioral analysis',
        'Cloud-based management',
        'Incident response',
        'Threat intelligence'
      ],
      benefits: ['Threat Prevention', 'Compliance', 'Centralized Management', 'Fast Response']
    },
    {
      name: 'CA API Gateway',
      category: 'API Management',
      categoryColor: 'var(--broadcom-blue)',
      description: 'Secure, manage, and monitor APIs across your enterprise with comprehensive gateway capabilities and developer-friendly tools.',
      features: [
        'API security policies',
        'Rate limiting & throttling',
        'Analytics & monitoring',
        'Developer portal',
        'Protocol transformation'
      ],
      benefits: ['API Security', 'Developer Productivity', 'Operational Visibility', 'Scalability']
    }
  ];
} 