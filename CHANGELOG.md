# Changelog

All notable changes to the **React Stack Tools** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Enhanced error handling for file generation failures
- Support for custom templates configuration
- Integration with workspace settings for default naming conventions

### Changed
- Improved TypeScript type definitions in generated files
- Better code formatting in generated components

### Fixed
- Minor issues with file path resolution on Windows

## [0.1.0] - 2025-07-12

### Added
- **Component Generator**: Generate complete React components with folder structure
  - TypeScript React component (`.tsx`)
  - CSS Modules stylesheet (`.module.css`)
  - TypeScript interface definitions (`.types.ts`)
  - Unit test file with React Testing Library (`.test.tsx`)
  - Index file for clean exports (`index.ts`)
- **Custom Hook Generator**: Create reusable custom hooks
  - Hook implementation with `useState` and `useEffect`
  - TypeScript type safety
  - Unit tests with React Testing Library
  - Index file for exports
- **Context Generator**: Generate React Context patterns
  - Context definition with TypeScript interfaces
  - Provider component with state management
  - Custom hook for consuming context (`useContextName`)
  - Complete folder structure with index exports
- **Service Generator**: Create API service layers
  - Axios-based HTTP client with CRUD operations
  - TypeScript support for requests and responses
  - Unit tests with mocked axios
  - RESTful API patterns (GET, POST, PUT, DELETE)
- **Guard Generator**: Generate route guards and authentication helpers
- **VS Code Integration**: 
  - Right-click context menu in Explorer for folder-based generation
  - Command Palette integration (`React: Generate File`)
  - Quick Pick menu for selecting generator type
- **Smart Naming**: Automatic PascalCase conversion for consistent naming
- **Modern Tooling**: 
  - TypeScript for type safety
  - ESBuild for fast compilation
  - ESLint for code quality
  - Automated testing setup

### Technical Details
- Built with TypeScript and VS Code Extension API
- Uses ESBuild for efficient bundling
- Follows VS Code extension best practices
- Supports VS Code 1.102.0 and higher
- Organized modular architecture with separate generators and templates

---

## Release Notes

### 0.1.0 - Initial Release

This is the first public release of React Stack Tools! 🚀

The extension provides a comprehensive set of generators to streamline React development workflow. Each generator creates production-ready code following modern React best practices, including TypeScript support, proper testing setup, and organized folder structures.

**Key Features:**
- Generate complete component folders with all necessary files
- Create custom hooks with proper TypeScript typing
- Set up React Context patterns with providers and consumers
- Generate API service layers with Axios integration
- Smart naming conventions and automatic PascalCase conversion
- Seamless VS Code integration with context menus and command palette

Perfect for developers who want to focus on business logic rather than boilerplate code setup.