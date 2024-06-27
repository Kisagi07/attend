import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^next-auth$": "<rooDir>/__mocks__/next-auth.ts",
    "^next-auth/(.*)$": "<rootDir>/node_modules/next-auth/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "<rootDir>/__mocks__/singleton.ts"],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
