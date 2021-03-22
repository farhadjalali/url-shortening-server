import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	collectCoverage: true,
	roots: ['<rootDir>/src'],
	preset: 'ts-jest',
	moduleFileExtensions: ['ts', 'js'],
	watchman: false,
};

export default config;
