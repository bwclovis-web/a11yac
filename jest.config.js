module.exports = {
    transform: {
        "^.*\\.[jt]sx?$": "<rootDir>/jest-preprocess.js"
    },
    moduleNameMapper: {
        "^@reach/router(.*)": "<rootDir>/node_modules/@gatsbyjs/reach-router$1",
        ".+\\.(css|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|png|gif|ttf)$": `<rootDir>/__MOCKS__/file-mock.js`
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    coverageReporters: ["lcov"]
}