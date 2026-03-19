import { defineConfig } from 'oxfmt';

export const config: ReturnType<typeof defineConfig> = defineConfig({
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
    sortImports: {
        customGroups: [],
        groups: [
            'side_effect-import',
            'value-import',
            'type-import',
            { newlinesBetween: true },
            'unknown'
        ],
        ignoreCase: false,
        internalPattern: [],
        newlinesBetween: false,
        order: 'asc',
        partitionByComment: false,
        partitionByNewline: false,
        sortSideEffects: false
    },
    sortPackageJson: false,
    sortTailwindcss: {
        attributes: [],
        functions: [],
        preserveDuplicates: false,
        preserveWhitespace: false
    },
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    vueIndentScriptAndStyle: false
} as const);
