import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="hero py-5">
      <div class="container">
        <div class="text-center">
          <h1>About Broadcom Inc.</h1>
          <p class="hero-subtitle">
            A global technology leader that designs, develops and supplies semiconductor and infrastructure software solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="company-overview py-5">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h2>Our Mission</h2>
            <p class="large-text">
              To connect everything through our innovative semiconductor and infrastructure software solutions, 
              enabling our customers to advance the world's connectivity and accelerate digital transformation.
            </p>
            <p>
              Founded in 1961, Broadcom Inc. has grown to become one of the world's leading semiconductor companies, 
              providing solutions that power cloud data centers, telecom infrastructure, enterprise networks, and more. 
              Our comprehensive portfolio spans from foundational infrastructure to cutting-edge technologies.
            </p>
          </div>
          <div class="col-4">
            <div class="stats-card">
              <h3>Company Facts</h3>
              <div class="fact-item">
                <span class="fact-number">$35.8B</span>
                <span class="fact-label">Annual Revenue</span>
              </div>
              <div class="fact-item">
                <span class="fact-number">20,000+</span>
                <span class="fact-label">Employees Worldwide</span>
              </div>
              <div class="fact-item">
                <span class="fact-number">220+</span>
                <span class="fact-label">Countries Served</span>
              </div>
              <div class="fact-item">
                <span class="fact-number">1961</span>
                <span class="fact-label">Founded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section class="leadership py-5" style="background: var(--broadcom-light-gray);">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Leadership Team</h2>
        </div>
        <div class="row">
          <div class="col-4" *ngFor="let leader of leadership">
            <div class="leader-card">
              <div class="leader-avatar">
                {{ leader.initials }}
              </div>
              <h4>{{ leader.name }}</h4>
              <p class="leader-title">{{ leader.title }}</p>
              <p class="leader-bio">{{ leader.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Segments -->
    <section class="business-segments py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Business Segments</h2>
        </div>
        <div class="row">
          <div class="col-6" *ngFor="let segment of businessSegments">
            <div class="segment-card">
              <div class="segment-icon" [style.background-color]="segment.color">
                {{ segment.icon }}
              </div>
              <h3>{{ segment.name }}</h3>
              <p>{{ segment.description }}</p>
              <ul class="segment-products">
                <li *ngFor="let product of segment.products">{{ product }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values py-5" style="background: var(--broadcom-black); color: var(--broadcom-white);">
      <div class="container">
        <div class="text-center mb-5">
          <h2 style="color: var(--broadcom-white);">Our Values</h2>
        </div>
        <div class="row">
          <div class="col-3" *ngFor="let value of values">
            <div class="value-item text-center">
              <div class="value-icon">{{ value.icon }}</div>
              <h4 style="color: var(--broadcom-white);">{{ value.title }}</h4>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, var(--broadcom-black) 0%, var(--broadcom-dark-gray) 100%);
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

    .large-text {
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--broadcom-dark-gray);
      margin-bottom: 2rem;
    }

    .stats-card {
      background: var(--broadcom-light-gray);
      padding: 2rem;
      border-radius: 8px;
      height: fit-content;
    }

    .stats-card h3 {
      margin-bottom: 2rem;
      color: var(--broadcom-black);
    }

    .fact-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid var(--broadcom-gray);
    }

    .fact-item:last-child {
      border-bottom: none;
    }

    .fact-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--broadcom-red);
    }

    .fact-label {
      color: var(--broadcom-dark-gray);
      font-weight: 500;
    }

    .leader-card {
      text-align: center;
      margin-bottom: 2rem;
    }

    .leader-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--broadcom-red);
      color: var(--broadcom-white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0 auto 1rem;
    }

    .leader-title {
      color: var(--broadcom-red);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .leader-bio {
      font-size: 0.95rem;
      color: var(--broadcom-dark-gray);
      line-height: 1.5;
    }

    .segment-card {
      background: var(--broadcom-white);
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      height: 100%;
    }

    .segment-icon {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .segment-products {
      list-style: none;
      margin: 1.5rem 0 0 0;
      padding: 0;
    }

    .segment-products li {
      padding: 0.5rem 0;
      color: var(--broadcom-dark-gray);
      position: relative;
      padding-left: 1.5rem;
    }

    .segment-products li:before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--broadcom-red);
      font-weight: bold;
    }

    .value-item {
      margin-bottom: 2rem;
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .values p {
      color: var(--broadcom-gray);
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .stats-card {
        margin-top: 2rem;
      }

      .leader-avatar {
        width: 80px;
        height: 80px;
        font-size: 1.5rem;
      }

      .value-icon {
        font-size: 2.5rem;
      }
    }
  `]
})
export class CompanyComponent {
  leadership = [
    {
      name: 'Hock E. Tan',
      title: 'President and CEO',
      initials: 'HT',
      bio: 'Leading Broadcom\'s strategic vision and global operations since 2006, driving innovation in semiconductor and infrastructure software solutions.'
    },
    {
      name: 'Kirsten Spears',
      title: 'Chief Financial Officer',
      initials: 'KS',
      bio: 'Overseeing financial strategy, investor relations, and corporate development to support Broadcom\'s continued growth and market leadership.'
    },
    {
      name: 'Mark Brazeal',
      title: 'Chief Operating Officer',
      initials: 'MB',
      bio: 'Managing global operations, supply chain, and manufacturing to ensure efficient delivery of Broadcom\'s diverse product portfolio.'
    }
  ];

  businessSegments = [
    {
      name: 'Semiconductor Solutions',
      description: 'Leading provider of analog and digital semiconductor solutions for wired and wireless communications, data center networking, and industrial applications.',
      icon: 'SEMI',
      color: 'var(--broadcom-red)',
      products: [
        'Broadband Access Chips',
        'Wireless Connectivity Solutions',
        'Data Center Networking ASICs',
        'Storage Adapters & Controllers',
        'Fiber Optic Components'
      ]
    },
    {
      name: 'Infrastructure Software',
      description: 'Comprehensive software solutions for enterprise environments including mainframe, distributed systems, and security applications.',
      icon: 'SOFT',
      color: 'var(--broadcom-blue)',
      products: [
        'CA Enterprise Software',
        'Mainframe Software Solutions',
        'VMware Cloud Infrastructure',
        'Symantec Security Products',
        'API Management & Integration'
      ]
    }
  ];

  values = [
    {
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of technology to create solutions that transform industries.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'Delivering the highest quality products and services that exceed customer expectations.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical business practices in all our interactions.',
      icon: '🤝'
    },
    {
      title: 'Collaboration',
      description: 'Working together across teams, disciplines, and borders to achieve common goals.',
      icon: '🤝'
    }
  ];
} 