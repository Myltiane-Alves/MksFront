import type {Config} from 'jest';
import nextJest from 'next/jest';

import {defaults} from 'jest-config';
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
const config: Config = {
  // dir: "./",
  moduleFileExtensions: ['ts', 'tsx', "jsx", "json", "js", "node"],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: { '^@/components/(.*)$': '<rootDir>/components/$1' },
};

export default createJestConfig(config);