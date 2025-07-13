# 🚀 React Stack Tools

![React Stack Tools](/media/banner.png)

**A powerful VS Code extension to generate React components, hooks, contexts, services and guards with best practices and productivity in mind.**

React Stack Tools streamlines your React development workflow by automatically generating boilerplate code for common React patterns. Create components with complete folder structures, custom hooks, context providers, API services, and more — all following industry best practices and modern React conventions.

![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/reactstacktools.svg)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/reactstacktools.svg)
![Rating](https://img.shields.io/visual-studio-marketplace/r/reactstacktools.svg)

## ✨ Features

- **📦 Component Generator**: Creates complete component folders with:
  - React component (`.tsx`)
  - CSS Modules (`.module.css`)
  - TypeScript types (`.types.ts`)
  - Unit tests (`.test.tsx`)
  - Index file for clean exports

- **🔧 Custom Hook Generator**: Generates reusable custom hooks with:
  - Hook implementation with useState and useEffect
  - Unit tests with React Testing Library
  - Proper TypeScript types
  - Index file for exports

- **🌐 Context Generator**: Creates React Context patterns with:
  - Context definition with TypeScript interfaces
  - Provider component with state management
  - Custom hook for consuming context
  - Complete folder structure

- **🛠️ Service Generator**: Generates API service layers with:
  - Axios-based HTTP client
  - CRUD operations (Create, Read, Update, Delete)
  - TypeScript support
  - Unit tests with mocked axios

- **🛡️ Guard Generator**: Creates route guards and authentication helpers
- **⚡ Quick Access**: Right-click context menu in Explorer
- **🎯 Smart Naming**: Automatic PascalCase conversion
- **📁 Organized Structure**: Creates dedicated folders for each generated item

## 📥 Installation

### Via VS Code Marketplace

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "React Stack Tools"
4. Click **Install**

### Via VSIX File

1. Download the `.vsix` file from the releases page
2. Open VS Code
3. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
4. Run `Extensions: Install from VSIX...`
5. Select the downloaded `.vsix` file

## 🚀 Usage

### Using the Context Menu

1. Right-click on any folder in the Explorer
2. Select **"React: Generate File"**
3. Choose the type of file you want to generate:
   - 📦 Generate Component
   - 🔧 Generate Hook
   - 🌐 Generate Context
   - 🛠️ Generate Service
4. Enter the name for your new item
5. The extension will create a complete folder structure

### Using the Command Palette

1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "React: Generate File"
3. Follow the same steps as above

## 📸 Screenshots

![Context Menu Usage](./media/context-menu-screenshot.png)
*Right-click context menu showing the React Stack Tools option*

![Quick Pick Menu](./media/quick-pick-screenshot.png)
*Generator selection menu with available options*

![Generated Component](./media/generated-component-screenshot.png)
*Example of generated component folder structure*

## 📋 Examples

### Generated Component Structure

```
MyButton/
├── MyButton.tsx
├── MyButton.module.css
├── MyButton.types.ts
├── MyButton.test.tsx
└── index.ts
```

**MyButton.tsx**
```tsx
import './MyButton.module.css';
    
export const MyButton = () => {
    return (
        <div>
            <h1>MyButton Component</h1>
        </div>
    );
};
```

**MyButton.types.ts**
```typescript
export interface MyButtonProps {
    // define props here
}
```

### Generated Hook Structure

```
useAuth/
├── useAuth.ts
├── useAuth.test.tsx
└── index.ts
```

**useAuth.ts**
```typescript
import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [state, setState] = useState<AuthState | null>(null);

    useEffect(() => {
        // Fetch or compute initial state here
        setState(initialState);
    }, []);

    return state;
};
```

### Generated Service Structure

```
user/
├── UserService.ts
├── UserService.test.ts
└── index.ts
```

**UserService.ts**
```typescript
import axios from 'axios';

export const UserService = {
  fetchAll: async () => {
    const response = await axios.get('/api/user');
    return response.data;
  },

  fetchById: async (id: string | number) => {
    const response = await axios.get(`/api/user/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await axios.post('/api/user', data);
    return response.data;
  },

  update: async (id: string | number, data: any) => {
    const response = await axios.put(`/api/user/${id}`, data);
    return response.data;
  },

  delete: async (id: string | number) => {
    const response = await axios.delete(`/api/user/${id}`);
    return response.data;
  },
};
```

### Generated Context Structure

```
UserContext/
├── UserContext.ts
├── UserProvider.tsx
├── useUser.ts
└── index.ts
```

## 🔧 Requirements

- VS Code 1.102.0 or higher
- React project (TypeScript recommended)

## 🛠️ Built With

- **TypeScript** - Type safety and modern JavaScript features
- **VS Code Extension API** - Integration with VS Code
- **Node.js** - Runtime environment
- **ESBuild** - Fast bundling for production

## 📦 Dependencies

The generated service files use **Axios** for HTTP requests. Make sure to install it in your project:

```bash
npm install axios
# or
yarn add axios
```

For testing, the generated test files use **@testing-library/react**:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
# or
yarn add --dev @testing-library/react @testing-library/jest-dom
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a detailed history of changes.

## 🐛 Known Issues

- None at the moment. If you find any issues, please report them in the [GitHub Issues](https://github.com/yourusername/reactstacktools/issues) page.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the VS Code team for the excellent extension API
- Inspired by modern React development practices
- Built with love for the React community ❤️

---

**Enjoy coding with React Stack Tools!** 🚀

If you find this extension helpful, please consider giving it a ⭐ on the marketplace and sharing it with your fellow developers!