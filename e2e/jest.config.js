module.exports = {
  preset: 'ts-jest',
  testTimeout: 120000,
  maxWorkers: 1,
  transform: {
    '^(?!.*\\.(ts|tsx)$)': 'ts-jest',
  },
  verbose: true,
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.spec.ts'],
  reporters: ['detox/runners/jest/reporter'],
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
};
