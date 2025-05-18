# JSONPlaceholder API Test

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

---

This project demonstrates how to fetch and manage API data using **Axios** and **React Query**, styled with **Tailwind CSS**, and built with **React + TypeScript + Vite**.
It is ideal for developers looking for a simple, scalable example of data fetching in modern React apps.

---

## 📖 About the Project

This project serves as a comprehensive example of modern React application development, showcasing best practices in code organization, testing, and development workflow. Key features include:

### Data Management & API Integration

- 📡 Implements efficient data fetching using [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API
- 🔄 Leverages React Query for powerful server-state management with built-in caching
- 🎯 Demonstrates proper API error handling and loading states
- 🔌 Uses Axios for type-safe HTTP requests

### Development Experience

- ⚡ Lightning-fast development with Vite bundler
- 🧪 Comprehensive testing setup with Jest and React Testing Library
- 📚 Component documentation and testing with Storybook
- 🎨 Modern UI styling using Tailwind CSS with responsive design

### Code Quality & Standards

- 🧹 Strict TypeScript configuration for type safety
- ✨ Automated code formatting with Prettier
- 🚨 Extensive ESLint rules for code quality
- 🔍 Pre-commit and pre-push hooks with Husky for:
  - Linting checks
  - Type checking
  - Unit test verification
  - Code formatting

### Architecture & Organization

- 🏗️ Follows Atomic Design principles for component organization
- 📦 Modular and maintainable code structure
- 🎯 Custom hooks for reusable logic
- 🔄 Context-based state management where appropriate

This project is ideal for developers looking to:

- Learn modern React application architecture
- Understand TypeScript best practices
- Implement automated code quality tools
- Set up a professional development workflow

---

## 🚀 Technologies Used

- Vite
- React
- TypeScript
- Axios
- React Query (@tanstack/react-query)
- React Router DOM
- Tailwind CSS
- Jest
- React Testing Library
- Testing Library Jest DOM
- ESLint + Prettier
- Storybook
- Husky (Git hooks)

---

## 📋 Features

- API communication with error handling.
- Global state management for async data (loading, success, error).
- Custom Axios instance for scalable requests.
- Component-based, modular architecture.
- Modern UI with full responsiveness.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alexsantosquispe/jsonplaceholder-api-test.git
   ```
2. Navigate to the project folder:
   ```bash
   cd jsonplaceholder-api-test
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:5173`.

---

## 📁 Project Structure

```
├── src/                        # Source code
│   ├── assets/                # Static assets (images, fonts, etc.)
│   ├── components/            # React components (Atomic Design)
│   │   ├── atoms/            # Basic building blocks
│   │   ├── molecules/        # Combinations of atoms
│   │   └── organisms/        # Complex components
│   │       ├── Albums/       # Albums section
│   │       ├── Posts/        # Posts section
│   │       └── Todos/        # Todos section
│   ├── context/              # React Context definitions
│   ├── hooks/                # Custom React hooks
│   ├── icons/                # SVG icons and icon components
│   ├── services/             # API and service integrations
│   └── types/                # TypeScript type definitions
│
├── .storybook/              # Storybook configuration
├── .husky/                  # Git hooks configuration
├── .vscode/                 # VS Code settings
│
├── Configuration Files
│   ├── .eslintrc.cjs       # ESLint configuration
│   ├── .prettierrc         # Prettier configuration
│   ├── jest.config.ts      # Jest testing configuration
│   ├── jest.setup.ts       # Jest setup file
│   ├── tsconfig.json       # TypeScript configuration
│   ├── tsconfig.app.json   # App-specific TS config
│   ├── tsconfig.jest.json  # Jest-specific TS config
│   ├── tsconfig.node.json  # Node-specific TS config
│   ├── vite.config.ts      # Vite configuration
│   └── tailwind.config.js  # Tailwind CSS configuration
```

### Key Directories

#### Components (Atomic Design)

- **atoms/**: Smallest, indivisible components

- **molecules/**: Combinations of atoms

- **organisms/**: Complex, self-contained sections

#### Core Functionality

- **context/**: Application-wide state management

  - Theme context

- **hooks/**: Reusable logic

  - API data fetching hooks
  - UI interaction hooks
  - Utility hooks

- **services/**: External integrations
  - API client configuration
  - API endpoints and methods
  - Service utilities

### Architecture Decisions

- **Atomic Design**: Components are organized following atomic design principles for better scalability and reusability
- **Type Safety**: Comprehensive TypeScript types for enhanced development experience
- **API Integration**: Centralized API services with React Query for efficient data fetching and caching
- **Testing**: Jest and React Testing Library for unit and integration tests
- **Documentation**: Storybook for component documentation and visual testing

### Component Structure Best Practices

Each component should follow this file structure:

```
components/
└── ComponentName/
    ├── ComponentName.tsx        # Main component file
    ├── ComponentName.test.tsx   # Test file
    └── ComponentName.stories.ts # Storybook file
```
