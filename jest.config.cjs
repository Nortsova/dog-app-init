
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest",
      '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  snapshotSerializers: ['@emotion/jest/serializer']
}