# GitHub Copilot Instructions for BMI Calculator React TypeScript Project

## Project Overview

This is a React TypeScript application for calculating BMI (Body Mass Index) built with Vite and styled with Tailwind CSS. The project follows modern React practices with TypeScript integration.

## Code Style Guidelines

### TypeScript

- Use strict type checking
- Avoid `any` types unless absolutely necessary
- Define interfaces for all props and state
- Use type inference when types are obvious
- Use `enum` for fixed sets of values
- Utilize union types for variables that can have multiple types

### React Components

- Use functional components with TypeScript
- Define prop interfaces with descriptive names
- Use React.FC type for functional components
- Implement proper error boundaries
- Follow React hooks rules strictly

### Component Structure

```typescript
interface ComponentNameProps {
  // Props definition
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};
```

### Tailwind CSS

- Use Tailwind utility classes directly in JSX
- Create custom components for repeated patterns
- Follow responsive design principles using Tailwind breakpoints
- Extend Tailwind theme in tailwind.config.js as needed
- Avoid mixing standard CSS with Tailwind unless necessary

### State Management

- Use React hooks (useState, useReducer) for local state
- Implement context for global state when needed
- Keep state as close to where it's used as possible

### File Organization

- Components in separate files
- Shared interfaces in types/ directory
- Utils in utils/ directory
- Constants in constants/ directory
- Hooks in hooks/ directory

### Naming Conventions

- Components: PascalCase
- Files: PascalCase for components, camelCase for others
- Interfaces: PascalCase with descriptive name (e.g., `BMIFormProps`)
- Types: PascalCase
- Functions: camelCase
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Code Documentation

- Add JSDoc comments for components and functions
- Document complex logic with inline comments
- Include param and return type documentation
- Add TODO comments for future improvements

### Testing

- Write unit tests for components
- Test hooks separately
- Use React Testing Library
- Follow AAA pattern (Arrange, Act, Assert)
- Test error cases and edge conditions

### Performance

- Memoize expensive calculations
- Use React.memo for pure components
- Implement proper cleanup in useEffect
- Avoid unnecessary re-renders
- Use lazy loading for large components

### Accessibility

- Use semantic HTML elements
- Include ARIA labels where needed
- Ensure keyboard navigation
- Maintain proper heading hierarchy
- Provide alt text for images
- Ensure sufficient color contrast

### Error Handling

- Implement proper error boundaries
- Use try-catch blocks where appropriate
- Display user-friendly error messages
- Log errors for debugging
- Handle form validation errors gracefully
- Provide meaningful feedback for calculation errors

### Git Practices

- Write meaningful commit messages
- Use feature branches
- Keep commits atomic
- Follow conventional commits format

### Code Quality

- Run ESLint before commits
- Maintain consistent formatting with Prettier
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principle
- Use meaningful variable names

## BMI Calculator Specific Guidelines

### BMI Calculation

- Use precise mathematical operations
- Handle edge cases (negative values, zero values)
- Validate input within realistic ranges
- Support different measurement units (metric and imperial)
- Provide interpretation of BMI values according to standard categories

### User Interface

- Design a clean, intuitive interface
- Provide immediate feedback on input changes
- Use appropriate form controls
- Make the calculator responsive for all device sizes
- Include clear instructions for users

## Copilot Specific Instructions

### Preferred Suggestions

- Suggest type-safe solutions
- Recommend React best practices
- Offer performance optimizations
- Provide accessibility improvements
- Suggest error handling patterns
- Recommend Tailwind CSS patterns for responsive design

### Code Generation

- Generate with TypeScript types
- Include error handling
- Add proper comments
- Follow project structure
- Include unit tests
- Incorporate Tailwind CSS classes

### Refactoring

- Maintain type safety
- Preserve functionality
- Improve performance
- Enhance readability
- Consider edge cases

## Development Workflow

1. Start with component interface definition
2. Implement component logic and UI with Tailwind CSS
3. Add proper error handling and validation
4. Write unit tests
5. Document the code
6. Review for accessibility
7. Optimize performance

## Quality Checklist

- [ ] TypeScript types are properly defined
- [ ] Props are documented
- [ ] Error handling is implemented
- [ ] Form validation is working
- [ ] BMI calculation is accurate
- [ ] Tests are written
- [ ] Accessibility is considered
- [ ] Performance is optimized
- [ ] Code is documented
- [ ] Responsive design with Tailwind CSS is implemented
- [ ] ESLint shows no errors
- [ ] Prettier formatting is applied

Remember: These instructions serve as a guide for maintaining high-quality, consistent code throughout the project. Follow these practices to ensure maintainable and scalable code.
