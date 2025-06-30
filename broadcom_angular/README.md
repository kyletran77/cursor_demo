# Broadcom Demo Website

A modern, responsive demo website showcasing Broadcom Inc.'s enterprise software solutions built with Angular 17.

## Features

- **Interactive Landing Page**: Hero section with animated floating cards showcasing key product areas
- **Solutions Page**: Comprehensive overview of enterprise software solutions 
- **Products Page**: Detailed product catalog with categories and features
- **Company Page**: Information about Broadcom Inc., leadership, and business segments
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Broadcom's brand colors and design system

## Technologies Used

- Angular 17 (Standalone Components)
- TypeScript
- SCSS for styling
- Responsive CSS Grid & Flexbox
- CSS animations and transitions

## Broadcom Brand Colors

- Primary Red: `#CC092F`
- Blue: `#0092B2`
- Black: `#000000`
- White: `#FFFFFF`
- Light Gray: `#F8F9FA`

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd broadcom-demo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/           # Landing page component
│   │   ├── solutions/      # Solutions overview page
│   │   ├── products/       # Products catalog page
│   │   └── company/        # Company information page
│   ├── app.component.ts    # Main app component with navigation
│   └── app.routes.ts       # Routing configuration
├── styles.scss             # Global styles with Broadcom design system
└── index.html              # Main HTML template
```

## Key Components

### Home Page
- Hero section with animated product cards
- Company statistics
- Solutions preview
- Featured products showcase
- Call-to-action section

### Solutions Page
- Enterprise Software solutions
- Mainframe Software capabilities
- VMware Cloud Infrastructure
- Benefits and value propositions

### Products Page
- Product categories overview
- Featured products with detailed information
- Key features and benefits

### Company Page
- Company mission and overview
- Leadership team
- Business segments
- Core values

## Development

This project was generated with Angular CLI and uses:
- Standalone components (Angular 17 feature)
- SCSS for styling
- Responsive design patterns
- CSS custom properties for theming

## License

This is a demo project created for demonstration purposes.

## Contact

For questions about this demo, please contact the development team. 