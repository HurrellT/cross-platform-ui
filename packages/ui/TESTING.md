# Jest and React Native Testing Library Setup

## Overview
This document outlines the complete setup for Jest and `@testing-library/react-native` in your UI package.

## Installed Dependencies

### Core Testing Dependencies
- `jest`: ^30.0.5 - JavaScript testing framework
- `@testing-library/react-native`: ^13.2.0 - Testing utilities for React Native
- `react-test-renderer`: ^18.2.0 - Required for React Native testing
- `jest-environment-jsdom`: ^30.0.5 - DOM environment for Jest

### Babel Dependencies
- `@babel/core`: ^7.23.0 - Babel core for transforming code
- `@babel/preset-env`: ^7.23.0 - Modern JavaScript preset
- `@babel/preset-react`: ^7.23.0 - React/JSX preset
- `@babel/preset-typescript`: ^7.23.0 - TypeScript preset
- `@babel/plugin-transform-flow-strip-types`: ^7.23.0 - Flow type stripping
- `babel-jest`: ^30.0.5 - Babel transformer for Jest

### Supporting Dependencies
- `react-native-web`: ^0.20.0 - Web compatibility for React Native components
- `jsdom`: ^26.1.0 - DOM implementation for testing

## Configuration Files

### `jest.config.js`
- Uses jsdom environment for web-compatible testing
- Configures module name mapping for react-native to react-native-web
- Sets up proper transform ignore patterns
- Includes coverage configuration

### `babel.config.js`
- Configured with presets for env, TypeScript, and React
- Includes Flow type stripping plugin

### `src/setupTests.ts`
- Mocks for react-native-reanimated and react-native-safe-area-context
- Mocks for nativewind CSS interop
- Console warning/error filtering for cleaner test output

## Available Scripts

- `yarn test` - Run tests in watch mode
- `yarn test --watchAll=false` - Run tests once
- `yarn test:watch` - Run tests in watch mode (explicit)
- `yarn test:coverage` - Run tests with coverage report

## Testing Patterns

### Component Testing
Use `testID` props for reliable element selection:

```tsx
export function Button({ text, testID = "button" }: ButtonProps) {
  return (
    <Pressable testID={testID}>
      <Text testID={`${testID}-text`}>{text}</Text>
    </Pressable>
  );
}
```

### Test Examples
```tsx
import { render, fireEvent } from "@testing-library/react-native";

describe("Button", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<Button text="Click me" />);
    expect(toJSON()).toBeTruthy();
  });

  it("handles press events", () => {
    const mockOnClick = jest.fn();
    const { root } = render(<Button text="Click me" onClick={mockOnClick} />);
    
    fireEvent.press(root);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
```

## Notes

- React Native components are mapped to react-native-web for testing compatibility
- Text queries may not work reliably due to CSS interop transformations
- Use `testID` attributes for reliable element selection
- Coverage reports are generated in the `coverage/` directory
- Tests run in jsdom environment to simulate web behavior

## Troubleshooting

- If tests fail with Flow syntax errors, ensure the Flow type stripping plugin is properly configured
- For component rendering issues, check that all React Native dependencies are included in transformIgnorePatterns
- Use `component.debug()` to inspect the rendered component structure
