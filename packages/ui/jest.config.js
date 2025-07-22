module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: [
    '**/__tests__/**/*.(test|spec).(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^react-native/(.+)$': 'react-native-web/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|react-native-safe-area-context|nativewind)/)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
};
