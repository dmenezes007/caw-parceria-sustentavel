# Contributing to CAW - Parceria Sustentável

First off, thank you for considering contributing to CAW - Parceria Sustentável! 🎉

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List examples of how it would be used**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, ensure it follows the existing code style
3. Make sure your code lints (`npm run lint`)
4. Test your changes thoroughly
5. Update documentation if needed
6. Write a clear commit message

### Development Process

1. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/caw-parceria-sustentavel.git
   cd caw-parceria-sustentavel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

4. **Make your changes**
   - Write clean, readable code
   - Follow TypeScript best practices
   - Use meaningful variable and function names
   - Add comments for complex logic

5. **Test locally**
   ```bash
   npm run dev
   ```

6. **Commit your changes**
   ```bash
   git commit -m "Add some feature"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/my-new-feature
   ```

8. **Open a Pull Request**

## Code Style

- Use TypeScript for all new code
- Follow the existing code formatting
- Use functional components with hooks
- Keep components small and focused
- Use meaningful names for variables and functions
- Add TypeScript types for all props and functions

## Commit Message Guidelines

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests after the first line

## Project Structure

```
caw-parceria-sustentavel/
├── components/          # React components
│   ├── views/          # Page views
│   └── ...             # Shared components
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── ...
```

## Questions?

Feel free to open an issue for any questions or concerns!

Thank you for contributing! 🙏
