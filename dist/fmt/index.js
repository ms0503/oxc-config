import { defineConfig } from 'oxfmt';
export const config = defineConfig({
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'strict',
    ignorePatterns: ['.yarn/**', 'dist/**'],
    insertFinalNewline: true,
    jsxSingleQuote: false,
    objectWrap: 'collapse',
    overrides: [],
    // 80 column rule
    // oxlint-disable-next-line no-magic-numbers
    printWidth: 80,
    proseWrap: 'never',
    quoteProps: 'as-needed',
    semi: true,
    singleAttributePerLine: true,
    singleQuote: true,
    sortImports: null,
    sortPackageJson: false,
    sortTailwindcss: {
        attributes: [],
        config: null,
        functions: [],
        preserveDuplicates: false,
        preserveWhitespace: false,
        stylesheet: null
    },
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    vueIndentScriptAndStyle: false
});
