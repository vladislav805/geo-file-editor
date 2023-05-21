const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'ts-jest',
    testMatch: [
        '**/tests/**/*.ts',
        '**/*.test.ts',
    ],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.jest.json',
            }
        ]
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: `${__dirname}/src` }),
};
