# MetricsMind Analyzer

MetricsMind Analyzer is a web-based dashboard for competitive analysis. It provides a comprehensive view of competitors, including key performance metrics, market share, customer satisfaction, and recent activities. This tool is designed to help businesses make data-driven decisions by providing actionable insights into the competitive landscape.

## Features

- **Competitor Profiling:** View detailed profiles for each competitor.
- **Key Metrics:** Track important metrics like market share, customer satisfaction, and revenue growth.
- **Activity Timeline:** Stay updated with the latest competitor activities, such as product launches and market expansions.
- **Comparison Charts:** Visualize how you stack up against the competition with easy-to-read charts.
- **Custom Report Builder:** Build and export custom reports in PDF or PowerPoint format.
- **Interactive UI:** A modern, responsive, and user-friendly interface built with React and Tailwind CSS.

## Tech Stack

- **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

The project follows a standard Create React App structure, with a clear separation of concerns:

```
/
├── public/
│   └── index.html      # Main HTML file
├── src/
│   ├── components/     # Reusable React components
│   ├── data/           # Mock data for the application
│   ├── hooks/          # Custom React hooks for state management
│   ├── services/       # Data fetching and business logic
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles and Tailwind CSS imports
│   ├── index.tsx       # Application entry point
│   └── ...
├── .gitignore          # Files to be ignored by Git
├── package.json        # Project dependencies and scripts
├── README.md           # This file
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm start
```

This will open the application in your default browser at `http://localhost:3000`. The page will automatically reload if you make changes to the code.

### Building for Production

To create a production-ready build of the application, run:

```sh
npm run build
```

This will create a `build` directory with the optimized and minified assets for your application.
