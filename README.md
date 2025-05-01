# JSONPlaceholder API Test

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=git&logoColor=white)](https://typicode.github.io/husky/)

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
│   │   │   ├── AlbumItem/    # Individual album display
│   │   │   ├── CommentCard/  # Single comment component
│   │   │   ├── EndpointTitle/# API endpoint title display
│   │   │   ├── Modal/        # Reusable modal component
│   │   │   ├── PostCard/     # Individual post display
│   │   │   ├── PostDetailModal/ # Post details modal
│   │   │   ├── Skeleton/     # Loading skeleton components
│   │   │   └── TodoItem/     # Individual todo item
│   │   ├── molecules/        # Combinations of atoms
│   │   │   ├── Comments/     # Comments section
│   │   │   └── Navbar/       # Navigation components
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
├── public/                   # Public static assets
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

  - `AlbumItem/`: Display individual album information
  - `CommentCard/`: Render single comment with user details
  - `Modal/`: Reusable modal dialog component
  - `PostCard/`: Display individual post with actions
  - `Skeleton/`: Loading state placeholder components
  - `TodoItem/`: Individual todo item with status

- **molecules/**: Combinations of atoms

  - `Comments/`: Comment section with list and form
  - `Navbar/`: Navigation bar with routing and actions

- **organisms/**: Complex, self-contained sections
  - `Albums/`: Complete albums view with management
  - `Posts/`: Full posts section with CRUD operations
  - `Todos/`: Complete todos management interface

#### Core Functionality

- **context/**: Application-wide state management

  - Theme context
  - Authentication state
  - Global UI state

- **hooks/**: Reusable logic

  - API data fetching hooks
  - UI interaction hooks
  - Utility hooks

- **services/**: External integrations
  - API client configuration
  - API endpoints and methods
  - Service utilities

#### Configuration

- **.storybook/**: Storybook setup and addons
- **.husky/**: Git hooks for code quality
- **.vscode/**: Editor settings and recommended extensions

### File Organization Best Practices

1. **Component Structure**

   ```
   ComponentName/
   ├── index.ts           # Export file
   ├── ComponentName.tsx  # Main component
   ├── ComponentName.test.tsx    # Tests
   ├── ComponentName.stories.tsx # Storybook
   └── hooks/             # Component-specific hooks
   ```

2. **Testing Files**

   - Co-located with components
   - Snapshot tests in `__snapshots__/`
   - E2E tests in separate directory

3. **Type Definitions**
   - Global types in `types/`
   - Component-specific types with components
   - API types in `services/types`

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

### Best Practices

1. **Component Organization**

   - Use PascalCase for component names and files
   - Keep components focused and single-responsibility
   - Export components as named exports
   - Define interfaces/types within the component file or in a central types directory

2. **Testing**

   - Test component rendering
   - Test user interactions
   - Test error states
   - Use meaningful test descriptions
   - Use data-testid for test selectors

3. **Storybook**

   - Document all possible states
   - Include default and edge cases
   - Use args for dynamic props
   - Add documentation in comments
   - Enable autodocs for automatic documentation

4. **TypeScript**

   - Define strict prop types
   - Use interfaces for props
   - Use generics when needed
   - Avoid any type
   - Keep types close to where they're used

5. **Props**
   - Use descriptive prop names
   - Make props required unless optional
   - Provide default props when needed
   - Document complex props

### ESLint Rules and Best Practices

The project enforces strict code quality standards through ESLint with the following rule configurations:

#### TypeScript & General Rules

- **`@typescript-eslint/no-unused-vars`**: Prevents unused variable declarations
- **`@typescript-eslint/no-shadow`**: Prevents variable name shadowing
- **`@typescript-eslint/no-explicit-any`**: Warns against using the `any` type
- **`no-console`**: Only allows `console.warn` and `console.error`
- **`@typescript-eslint/no-magic-numbers`**: Enforces constants for magic numbers with exceptions for common values (-1, 0, 1, 2)

#### React & JSX Rules

1. **Component Structure**

   - **`react/react-in-jsx-scope`**: Disabled (not needed with new JSX transform)
   - **`react/prop-types`**: Disabled (using TypeScript for prop validation)
   - **`react/self-closing-comp`**: Enforces self-closing for components without children

2. **JSX Formatting**

   - **`react/jsx-boolean-value`**: Enforces shorthand boolean props
   - **`react/jsx-closing-bracket-location`**: Ensures consistent closing bracket placement
   - **`react/jsx-closing-tag-location`**: Enforces consistent closing tag location
   - **`react/jsx-curly-spacing`**: No spaces inside curly braces
   - **`react/jsx-equals-spacing`**: No spaces around equals in props
   - **`react/jsx-indent`**: 2-space indentation
   - **`react/jsx-indent-props`**: 2-space indentation for props
   - **`react/jsx-max-props-per-line`**: One prop per line in multiline components
   - **`react/jsx-pascal-case`**: Enforces PascalCase for component names

3. **JSX Best Practices**
   - **`react/jsx-key`**: Requires keys in array-rendered components
   - **`react/jsx-no-duplicate-props`**: Prevents duplicate props
   - **`react/jsx-fragments`**: Enforces fragment syntax
   - **`react/jsx-wrap-multilines`**: Proper wrapping of multiline JSX

#### Import Rules

1. **Import Organization**
   - **`import/order`**: Enforces import grouping and alphabetical ordering:
     - Built-in and external modules first
     - Internal modules second
     - Relative imports last
     - Newlines between groups
2. **Import Validation**
   - **`import/no-unresolved`**: Ensures all imports can be resolved
   - **`import/named`**: Validates named imports
   - \*\*`
