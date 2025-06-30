import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="nav-brand">
            <a routerLink="/" class="logo">
              <span class="logo-text">Broadcom</span>
            </a>
          </div>
          <div class="nav-menu" [class.active]="isMenuOpen">
            <ul class="nav-list">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
              <li><a routerLink="/solutions" routerLinkActive="active">Solutions</a></li>
              <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
              <li><a routerLink="/company" routerLinkActive="active">Company</a></li>
              <li><a href="#" class="btn btn-primary">Contact Us</a></li>
            </ul>
          </div>
          <div class="nav-toggle" (click)="toggleMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h5>Products</h5>
            <ul class="footer-links">
              <li><a href="#">Enterprise Software</a></li>
              <li><a href="#">Mainframe Software</a></li>
              <li><a href="#">Security Solutions</a></li>
              <li><a href="#">VMware Solutions</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h5>Solutions</h5>
            <ul class="footer-links">
              <li><a href="#">Cloud Infrastructure</a></li>
              <li><a href="#">DevOps & Security</a></li>
              <li><a href="#">Automation</a></li>
              <li><a href="#">Networking</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h5>Company</h5>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Broadcom Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .header {
      background: var(--broadcom-white);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .navbar {
      padding: 1rem 0;
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-size: 2rem;
      font-weight: 700;
      color: var(--broadcom-red);
    }

    .nav-list {
      display: flex;
      list-style: none;
      align-items: center;
      gap: 2rem;
    }

    .nav-list a {
      font-weight: 500;
      color: var(--broadcom-black);
      transition: color 0.3s ease;
    }

    .nav-list a:hover,
    .nav-list a.active {
      color: var(--broadcom-red);
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: var(--broadcom-black);
      margin: 3px 0;
      transition: 0.3s;
    }

    main {
      margin-top: 80px;
      min-height: calc(100vh - 80px);
    }

    .footer {
      background: var(--broadcom-black);
      color: var(--broadcom-white);
      padding: 3rem 0 1rem;
    }

    .footer h5 {
      color: var(--broadcom-white);
      margin-bottom: 1rem;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: var(--broadcom-gray);
      font-size: 0.9rem;
    }

    .footer-links a:hover {
      color: var(--broadcom-white);
    }

    .footer-bottom {
      text-align: center;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--broadcom-dark-gray);
      color: var(--broadcom-gray);
    }

    @media (max-width: 768px) {
      .nav-toggle {
        display: flex;
      }

      .nav-menu {
        position: fixed;
        left: -100%;
        top: 80px;
        flex-direction: column;
        background-color: var(--broadcom-white);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-list {
        flex-direction: column;
        padding: 2rem 0;
      }
    }
  `]
})
export class AppComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
} 