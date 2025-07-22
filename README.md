# cross-platform-component

This is a cross-platform component using React Native and Next.js with TypeScript. Powered by Turborepo monorepo, it allows you to share code between web and mobile applications seamlessly.

## Run example projects

To install dependencies and run the example projects, follow these steps:
```sh
npm install
```
```sh
npm run dev
```
This will start both the web and mobile applications. You can access the web app at `http://localhost:3000` and the mobile app using Expo Go on your device or emulator.

## Publish the component
To publish the component to npm, ensure you have the correct package name and version in `package.json` of the `@hurrellt/ui` package. Then run:
```sh
npm run build
cd packages/ui
npm publish --access public
```

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

## What's inside this project?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@hurrellt/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@hurrellt/typescript-config`: `tsconfig.json`s used throughout the monorepo