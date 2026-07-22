/**
 * This module contains oxfmt configurations.
 *
 * @module
 */

import { yaml } from './yaml.ts';
import { defineConfig } from 'oxfmt';

/**
 * Basic configuration
 *
 * Key settings (excerpt):
 *     EOL           : LF
 *     Line length   : 80
 *     Quotes        : Single quotes (except for JSX, which uses double quotes)
 *     Semi-colon    : Always
 *     Tab           : 4 spaces (except for YAML, which uses 2 spaces)
 *     Trailing comma: Never
 */
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
    overrides: [yaml].flat(),
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
