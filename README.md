# JSONPlaceholder API Test

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)

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

- React
- TypeScript
- Vite
- Axios
- React Query (@tanstack/react-query)
- Tailwind CSS
- ESLint + Prettier
- Jest
- React Testing Library
- Testing Library Jest DOM

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

## 🌐 API Source

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 📦 Main Dependencies

```bash
npm install axios @tanstack/react-query tailwindcss
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
