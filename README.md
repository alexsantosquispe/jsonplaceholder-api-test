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

---

This project demonstrates how to fetch and manage API data using **Axios** and **React Query**, styled with **Tailwind CSS**, and built with **React + TypeScript + Vite**.
It is ideal for developers looking for a simple, scalable example of data fetching in modern React apps.

---

## 📖 About the Project

- 📡 Fetches user data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) endpoint.
- 🔄 Manages loading, error, and success states cleanly using React Query.
- 🎨 Applies modern, responsive UI design with Tailwind CSS.
- 🧹 Clean and maintainable code with TypeScript, ESLint, and Prettier.
- ⚡ Fast development experience with Vite.

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
src/
├── assets/         # Static assets like images, fonts, etc.
├── components/     # React components organized using Atomic Design
│   ├── atoms/     # Basic building blocks (buttons, inputs, etc.)
│   ├── molecules/ # Combinations of atoms (forms, cards, etc.)
│   └── organisms/ # Complex components (sections, layouts)
├── context/       # React Context providers and hooks
├── hooks/         # Custom React hooks
├── icons/         # SVG icons and icon components
├── services/      # API services and data fetching logic
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point

Configuration Files:
├── .storybook/    # Storybook configuration
├── .vscode/       # VS Code settings and recommendations
├── jest.config.ts # Jest testing configuration
├── vite.config.ts # Vite build configuration
└── tailwind.config.js # Tailwind CSS configuration
```

### Key Directories

- **components/**: Uses Atomic Design methodology

  - `atoms/`: Smallest, indivisible components (buttons, inputs)
  - `molecules/`: Simple combinations of atoms (search forms, comment cards)
  - `organisms/`: Complex combinations of molecules and atoms (navigation bars, post lists)

- **services/**: Contains API integration logic and data fetching services using Axios and React Query

- **context/**: React Context providers for global state management

- **hooks/**: Reusable custom React hooks for shared logic

- **types/**: TypeScript interfaces, types, and enums shared across the application

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

---

## 🌐 API Source

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 📦 Main Dependencies

```bash
npm install axios @tanstack/react-query tailwindcss
```

---

## 📜 Available Scripts

### Development

```bash
# Start the development server
npm run dev

# Build the project for production
npm run build

# Preview the production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint to check for code issues
npm run lint

# Run ESLint and automatically fix issues
npm run lint:fix

# Format code using Prettier
npm run format
```

### Testing

```bash
# Run Jest tests
npm run test

# Update Jest snapshots
npm run test:update
```

### Documentation

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

---

## 🧪 How to Use

1. After starting the project, you will see a simple user list rendered on the page.
2. You can check loading and error states by simulating network errors.
3. The UI is responsive and adapts to different screen sizes.
4. Easily extend the project to consume other JSONPlaceholder endpoints (e.g., posts, comments).

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

# VS Code Extensions

This project includes recommended VS Code extensions to enhance your development experience. When you open the project in VS Code, you'll be prompted to install these extensions. Here's what each extension does:

## Recommended Extensions

1. **ESLint** (`dbaeumer.vscode-eslint`)

   - Integrates ESLint into VS Code
   - Provides real-time linting feedback
   - Automatically fixes linting issues on save

2. **Prettier** (`esbenp.prettier-vscode`)

   - Code formatter that enforces consistent style
   - Supports JavaScript, TypeScript, CSS, and more
   - Formats code on save

3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)

   - Provides autocomplete, syntax highlighting, and linting for Tailwind CSS
   - Shows preview of colors and spacing values
   - Hover previews of complete class names

4. **TypeScript Next** (`ms-vscode.vscode-typescript-next`)

   - Enhanced TypeScript support
   - Better type checking and IntelliSense
   - Improved error reporting

5. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)

   - Automatically renames paired HTML/XML tags
   - Works with JSX/TSX files
   - Saves time when refactoring component names

6. **Path Intellisense** (`christian-kohler.path-intellisense`)

   - Autocompletes filenames in import statements
   - Works with relative and absolute paths
   - Supports various file extensions

7. **Color Highlight** (`naumovs.color-highlight`)

   - Highlights web colors in your code
   - Shows color previews
   - Supports hex, rgb, hsl, and named colors

8. **Code Spell Checker** (`streetsidesoftware.code-spell-checker`)
   - Catches common spelling errors in code
   - Supports multiple languages
   - Customizable dictionary

## Installation

These extensions will be automatically recommended when you open the project in VS Code. You can install them by:

1. Opening the project in VS Code
2. Clicking "Install All" when prompted
3. Or manually installing them from the Extensions view (Ctrl+Shift+X / Cmd+Shift+X)
