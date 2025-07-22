// Setup file for Jest tests

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
  SafeAreaView: ({ children }: { children: React.ReactNode }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
}));

// Mock nativewind
jest.mock('nativewind', () => ({
  cssInterop: (Component: any) => Component,
}));

// Mock console warnings and errors for cleaner test output
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = jest.fn((message) => {
    // Only suppress specific React Native warnings
    if (
      message.includes('Warning: ReactDOM.render is no longer supported') ||
      message.includes('Warning: componentWillMount has been renamed') ||
      message.includes('Warning: componentWillReceiveProps has been renamed')
    ) {
      return;
    }
    originalWarn(message);
  });

  console.error = jest.fn((message) => {
    // Only suppress specific React Native errors
    if (
      message.includes('Warning: ReactDOM.render is no longer supported') ||
      message.includes('The above error occurred')
    ) {
      return;
    }
    originalError(message);
  });
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});
