# System Patterns

## Component Structure

### Page Layout Pattern
The website follows a consistent layout pattern:
- Header with navigation
- Main content area with multiple sections
- Footer with copyright and social links

### Content Management Pattern
Content is managed through a centralized JSON file:
- `staticCopy.json` contains all text content
- Components reference this file for their display text
- This pattern separates content from presentation
- Makes content updates and translations easier to manage

### Section Pattern
Each major section follows a consistent pattern:
- Section container with id for navigation
- Section heading
- Content specific to that section

## Naming Conventions

### Component Naming
- PascalCase for component names (e.g., `App`)
- Descriptive names that reflect the component's purpose

### CSS Class Naming
- kebab-case for CSS class names (e.g., `hero-content`)
- Class names reflect the component or element they style
- Follows a component-based approach rather than utility classes

### File Organization
- Components in their own files
- Related assets grouped together
- Separation of concerns between content and presentation

## Styling Approach

### CSS Organization
- Component-specific CSS
- Global styles for consistent theming
- Responsive design considerations

### Responsive Design Pattern
- Mobile-first approach
- Breakpoints for different device sizes
- Flexible layouts that adapt to screen size

## Future Pattern Considerations

### State Management
- Currently using simple props
- May need more robust state management as complexity grows

### Data Fetching
- Currently using static JSON
- May need API integration for dynamic content

### Component Composition
- Consider more reusable, smaller components
- Implement consistent prop patterns for component configuration