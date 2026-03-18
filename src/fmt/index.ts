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
            [
                'value-builtin',
                'value-external',
                'value-index',
                'value-internal',
                'value-parent',
                'value-sibling'
            ],
            [
                'type-import',
                'type-index',
                'type-internal',
                'type-parent',
                'type-sibling'
            ],
            'unknown'
        ],
        ignoreCase: false,
        internalPattern: [],
        newlinesBetween: true,
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
