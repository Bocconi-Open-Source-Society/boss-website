# Bocconi Open Source Society Website

This project is built with:

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Codebase Structure

```
boss-website/
├── public/              # Static assets
│   ├── placeholder.svg  # Placeholder images
│   └── robots.txt       # SEO configuration
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Footer.tsx
│   │   └── Hero.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── pages/           # Page components (routes)
│   │   ├── Index.tsx
│   │   ├── Join.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── components.json      # shadcn-ui configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

### Key Directories

- **`/src/components`**: Contains reusable UI components like Footer and Hero sections
- **`/src/pages`**: Page-level components that correspond to different routes
- **`/src/hooks`**: Custom React hooks for shared logic
- **`/src/lib`**: Utility functions, helpers, and third-party integrations
- **`/public`**: Static files served directly (images, robots.txt, etc.)

## Contributing

### Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm i`
4. Create a new branch: `git checkout -b feature/your-feature-name`
5. Start the dev server: `npm run dev`

### Development Workflow

1. **Make your changes** in the appropriate directory:
   - UI components go in `/src/components`
   - New pages go in `/src/pages`
   - Utilities go in `/src/lib`
   - Custom hooks go in `/src/hooks`

2. **Follow the code style**:
   - Use TypeScript for type safety
   - Follow existing naming conventions
   - Keep components focused and reusable
   - Use Tailwind CSS for styling

3. **Test your changes**:
   - Run `npm run dev` to test locally
   - Ensure the build succeeds: `npm run build`
   - Check for TypeScript errors

4. **Commit your changes**:
   - Use clear, descriptive commit messages
   - Example: `feat: add contact form component`

5. **Push and create a Pull Request**:
   - Push to your fork
   - Open a PR with a clear description of your changes
   - Link any related issues

### Code Guidelines

- **Components**: Use functional components with TypeScript
- **Styling**: Use Tailwind CSS utility classes
- **State Management**: Use React hooks (useState, useEffect, etc.)
- **File Naming**: Use PascalCase for components (e.g., `MyComponent.tsx`)
- **Imports**: Keep imports organized and remove unused ones

### Need Help?

If you have questions or need assistance, feel free to open an issue.

