const config = {
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.ts"],
};

export default config;
