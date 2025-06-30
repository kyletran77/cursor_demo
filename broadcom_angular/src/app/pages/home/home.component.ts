import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="hero-content fade-in-up">
              <h1>Powering Enterprise Innovation</h1>
              <p class="hero-subtitle">
                Leading provider of enterprise software solutions for mainframe, distributed, 
                and cloud infrastructure environments.
              </p>
              <div class="hero-buttons">
                <a routerLink="/solutions" class="btn btn-primary">Explore Solutions</a>
                <a href="#" class="btn btn-secondary">Watch Demo</a>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="hero-image">
              <div class="hero-graphic">
                <div class="floating-card card-1">
                  <h4>Enterprise Software</h4>
                  <p>CA Technologies</p>
                </div>
                <div class="floating-card card-2">
                  <h4>VMware Solutions</h4>
                  <p>Cloud Infrastructure</p>
                </div>
                <div class="floating-card card-3">
                  <h4>Security Solutions</h4>
                  <p>Symantec Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats py-5">
      <div class="container">
        <div class="row">
          <div class="col-3 text-center">
            <div class="stat-item">
              <h2 class="stat-number">$8.9B</h2>
              <p>Annual Revenue</p>
            </div>
          </div>
          <div class="col-3 text-center">
            <div class="stat-item">
              <h2 class="stat-number">20,000+</h2>
              <p>Global Employees</p>
            </div>
          </div>
          <div class="col-3 text-center">
            <div class="stat-item">
              <h2 class="stat-number">220+</h2>
              <p>Countries Served</p>
            </div>
          </div>
          <div class="col-3 text-center">
            <div class="stat-item">
              <h2 class="stat-number">95%</h2>
              <p>Fortune 100 Trust Us</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Preview -->
    <section class="solutions-preview py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Enterprise Solutions</h2>
          <p class="section-subtitle">
            Comprehensive software solutions to accelerate digital transformation
          </p>
        </div>
        <div class="row">
          <div class="col-4" *ngFor="let solution of solutions">
            <div class="solution-card card">
              <div class="solution-icon">
                <div class="icon-circle" [style.background-color]="solution.color">
                  {{ solution.icon }}
                </div>
              </div>
              <h4>{{ solution.title }}</h4>
              <p>{{ solution.description }}</p>
              <a href="#" class="learn-more">Learn More →</a>
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
          <p class="section-subtitle">
            Industry-leading software products trusted by enterprises worldwide
          </p>
        </div>
        <div class="row">
          <div class="col-6" *ngFor="let product of featuredProducts">
            <div class="product-card">
              <div class="product-header">
                <h4>{{ product.name }}</h4>
                <span class="product-category">{{ product.category }}</span>
              </div>
              <p>{{ product.description }}</p>
              <div class="product-features">
                <span class="feature-tag" *ngFor="let feature of product.features">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta py-5">
      <div class="container">
        <div class="cta-content text-center">
          <h2>Ready to Transform Your Enterprise?</h2>
          <p>Join thousands of organizations that trust Broadcom for their critical infrastructure needs.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary">Get Started</a>
            <a href="#" class="btn btn-outline">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, var(--broadcom-light-gray) 0%, var(--broadcom-white) 100%);
      padding: 6rem 0;
      min-height: 80vh;
      display: flex;
      align-items: center;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      color: var(--broadcom-black);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--broadcom-dark-gray);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      position: relative;
      height: 500px;
    }

    .hero-graphic {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .floating-card {
      position: absolute;
      background: var(--broadcom-white);
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      animation: float 3s ease-in-out infinite;
    }

    .card-1 {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .card-2 {
      top: 40%;
      right: 10%;
      animation-delay: 1s;
    }

    .card-3 {
      bottom: 10%;
      left: 20%;
      animation-delay: 2s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .stats {
      background: var(--broadcom-black);
      color: var(--broadcom-white);
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      color: var(--broadcom-red);
      margin-bottom: 0.5rem;
    }

    .stat-item p {
      font-size: 1rem;
      color: var(--broadcom-gray);
    }

    .solution-card {
      text-align: center;
      padding: 2.5rem 1.5rem;
      height: 100%;
    }

    .solution-icon {
      margin-bottom: 1.5rem;
    }

    .icon-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-size: 2rem;
      color: white;
      font-weight: bold;
    }

    .learn-more {
      color: var(--broadcom-red);
      font-weight: 500;
      text-decoration: none;
    }

    .learn-more:hover {
      color: var(--broadcom-blue);
    }

    .product-card {
      background: var(--broadcom-white);
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .product-category {
      background: var(--broadcom-red);
      color: var(--broadcom-white);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .product-features {
      margin-top: 1rem;
    }

    .feature-tag {
      display: inline-block;
      background: var(--broadcom-gray);
      color: var(--broadcom-dark-gray);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .cta {
      background: var(--broadcom-red);
      color: var(--broadcom-white);
    }

    .cta h2 {
      color: var(--broadcom-white);
      margin-bottom: 1rem;
    }

    .cta p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta .btn-outline {
      border-color: var(--broadcom-white);
      color: var(--broadcom-white);
    }

    .cta .btn-outline:hover {
      background: var(--broadcom-white);
      color: var(--broadcom-red);
    }

    .section-subtitle {
      font-size: 1.125rem;
      color: var(--broadcom-dark-gray);
      max-width: 600px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 4rem 0;
        text-align: center;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }

      .hero-image {
        margin-top: 3rem;
        height: 300px;
      }

      .stat-number {
        font-size: 2rem;
      }

      .floating-card {
        position: relative;
        margin: 1rem 0;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
      }

      .hero-graphic {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class HomeComponent {
  solutions = [
    {
      title: 'Enterprise Software',
      description: 'Comprehensive distributed software solutions for modern enterprises including DevOps, automation, and management tools.',
      icon: 'ES',
      color: 'var(--broadcom-red)'
    },
    {
      title: 'Mainframe Software',
      description: 'Complete mainframe solutions including automation, management, DevOps, and security for mission-critical systems.',
      icon: 'MF',
      color: 'var(--broadcom-blue)'
    },
    {
      title: 'Security Solutions',
      description: 'Integrated cyber defense solutions providing comprehensive threat protection and compliance for enterprises.',
      icon: 'SEC',
      color: '#28a745'
    }
  ];

  featuredProducts = [
    {
      name: 'CA Workload Automation DE',
      category: 'Automation',
      description: 'Comprehensive workload automation solution for managing complex business processes across distributed environments.',
      features: ['Cross-platform Support', 'Event-driven Scheduling', 'REST API', 'Scalable Architecture']
    },
    {
      name: 'VMware vSphere',
      category: 'Virtualization',
      description: 'Industry-leading virtualization platform that transforms data centers into simplified cloud computing infrastructures.',
      features: ['High Availability', 'Resource Management', 'Security', 'Performance Optimization']
    },
    {
      name: 'Symantec Endpoint Security',
      category: 'Security',
      description: 'Advanced threat protection that combines multiple layers of protection to secure endpoints against sophisticated attacks.',
      features: ['Machine Learning', 'Behavioral Analysis', 'Cloud Management', 'Zero-day Protection']
    },
    {
      name: 'CA API Gateway',
      category: 'API Management',
      description: 'Secure, manage, and monitor APIs across your enterprise with comprehensive gateway capabilities.',
      features: ['API Security', 'Rate Limiting', 'Analytics', 'Developer Portal']
    }
  ];
} 