# System Patterns

This document outlines the architectural patterns, coding conventions, and design principles used in the Ray Dollete personal website.

## Component Architecture

### Component Organization
- **Page Components**: Top-level components that represent entire pages
- **Layout Components**: Components that define the structure of the page (Header, Footer, etc.)
- **Feature Components**: Reusable components that implement specific features
- **UI Components**: Small, reusable UI elements like buttons, cards, etc.

### Component Structure
```
src/
  components/
    ui/           # Reusable UI components
    layout/       # Layout components
    features/     # Feature-specific components
  pages/          # Page components
  assets/         # Static assets
  styles/         # Global styles
  utils/          # Utility functions
  hooks/          # Custom React hooks
  context/        # React context providers
```

## Styling Approach
- CSS files co-located with components
- Consistent naming conventions
- Responsive design using media queries
- Mobile-first approach

## State Management
- React's built-in state management with hooks
- Context API for global state if needed

## Performance Considerations
- Lazy loading for images
- Code splitting for larger components
- Optimized asset delivery

## Accessibility Guidelines
- Semantic HTML
- ARIA attributes where necessary
- Keyboard navigation support
- Color contrast compliance

## Coding Conventions
- Functional components with hooks
- TypeScript interfaces for props
- Consistent naming patterns
- Documentation for complex logic