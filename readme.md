# node-starter

Starter template for Node.js projects with TypeScript.

## Features

- **TypeScript**: Static type checking for JavaScript, providing better tooling, error detection, and developer experience.
- **ESLint**: Code linting with customized rules to maintain code quality and consistency across the project.
- **Jest**: Comprehensive testing framework with built-in mocking, coverage reporting, and parallel test execution.
- **Logging with Pino**: Fast, low overhead logging with structured JSON output for better analysis and filtering.
- **Husky**: Automates Git hooks to ensure code quality checks run before commits are completed.
- **CI Workflows**:
  - Lint CI: Automated linting checks on pull requests to maintain code quality.
  - Test CI: Automated test runs to ensure code changes don't break existing functionality.

## why using pnpm

- pnpm uses a global store to keep a single copy of each package throw creates hard links instead of duplicating files.
