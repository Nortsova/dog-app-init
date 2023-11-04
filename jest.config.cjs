module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js'
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx,js,jsx}',
    '!src/**/*.test.{ts,tsx,js,jsx}',
    '!src/**/*.spec.{ts,tsx,js,jsx}',
    '!src/tests/**/*.{ts,tsx,js,jsx}',
    '!src/stories/**/*.{ts,tsx,js,jsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      line: 90,
      statements: 90
    }
  }
};
