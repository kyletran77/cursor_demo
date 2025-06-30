# High-Level Documentation

This document provides a high-level overview of the Broadcom website PoC application.

## Application Structure

The application is built with Angular and follows a standard project structure.

-   `src/app`: Contains the main application logic.
-   `src/app/pages`: Contains the different pages of the application.
-   `src/app/app.component.ts`: The main component, which includes the header, footer, and main content area.
-   `src/app/app.routes.ts`: Defines the application's routes.

## Pages

The application consists of the following pages:

-   **Home**: The main landing page.
-   **Solutions**: Displays the company's solutions.
-   **Products**: Displays the company's products.
-   **Company**: Provides information about the company.

## Routing

The application uses lazy loading for its routes to improve performance. The routes are defined in `src/app/app.routes.ts` and are as follows:

-   `/`: Home page
-   `/solutions`: Solutions page
-   `/products`: Products page
-   `/company`: Company page

Any other URL will redirect to the home page.

## Main Component

The main component (`app.component.ts`) serves as the shell for the application. It includes:

-   A header with a navigation bar.
-   A main content area where the different pages are rendered.
-   A footer with additional links.

The navigation bar includes links to all the main pages of the application. 