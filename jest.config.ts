import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', "jsx", "json", "js"],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleNameMapper: { '^@/components/(.*)$': '<rootDir>/components/$1' },
};

export default config;