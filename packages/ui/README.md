# cross-platform-component / Button

This is a cross-platform Button component using React Native and Next.js with TypeScript. Powered by Turborepo monorepo.

## Component installation and usage
To use the shared component in your projects, install it via npm:
```sh
npm install @hurrellt/ui
```
Then, you can import and use the `Button` component in your React Native or Next.js applications:

```tsx
import { Button } from '@hurrellt/ui';

const ExampleComponent = () => {
  // Example usage of the Button component
  return (
    <Button
      text="Click me"
      onClick={() => console.log("Button clicked!")}
      className="bg-blue-500 text-white"
    />
  );
};
export default ExampleComponent;
```