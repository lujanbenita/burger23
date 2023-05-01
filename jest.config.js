const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	modulePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/src/styles/", "<rootDir>/e2e"],
	coveragePathIgnorePatterns: ["index.ts", "index.tsx"],

	transformIgnorePatterns: ["/node_modules/(?!(ol)/)/"],
	modulePaths: ["<rootDir>"],
	collectCoverageFrom: ["./src/**"],
	coverageThreshold: {
		global: {
			branches: 55,
			functions: 60,
			lines: 72,
			statements: 73,
		},
	},
	testEnvironment: "jest-environment-jsdom",
	testMatch: ["<rootDir>/**/*.jsx"],
};

async function jestConfig() {
	const nextJestConfig = await createJestConfig(customJestConfig)();
	nextJestConfig.transformIgnorePatterns[0] = "/node_modules/(?!(ol)/)/";
	return nextJestConfig;
}

module.exports = jestConfig;
