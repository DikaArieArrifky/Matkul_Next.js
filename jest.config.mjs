import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/node_modules/**',
    '!src/**/.next/**',
    '!src/**/coverage/**',
    '!src/**/jest.config.mjs',
    '!src/**/next.config.mjs',
    '!src/**/types/**',
    '!src/**/views/**',
    '!src/**/page/api/**',

  ],
};

export default createJestConfig(config);