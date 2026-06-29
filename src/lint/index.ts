import {
    coreRules,
    jsxRules,
    nextjsRules,
    reactRules,
    vueRules
} from './rules/index.js';
import { defineConfig } from 'oxlint';

export const core = defineConfig({
    extends: [coreRules],
    jsPlugins: ['eslint-plugin-perfectionist'],
    plugins: [
        'eslint',
        'import',
        'node',
        'oxc',
        'promise',
        'typescript',
        'unicorn',
        'vitest'
    ]
} as const);

export const jsx = defineConfig({
    extends: [jsxRules],
    plugins: ['jsx-a11y', 'react', 'react-perf']
} as const);

export const hono = defineConfig({ extends: [core, jsx] } as const);

export const react = defineConfig({
    extends: [core, jsx, reactRules]
} as const);

export const vue = defineConfig({
    extends: [core, vueRules],
    plugins: ['vue']
} as const);

export const honox = defineConfig({
    extends: [hono],
    rules: {
        'react/jsx-no-script-url': [
            'error',
            [{ name: 'Script', props: ['src'] }],
            { includeFromSettings: true }
        ]
    }
} as const);

export const nextjs = defineConfig({
    extends: [react, nextjsRules],
    plugins: ['nextjs']
} as const);

export const reactRouter = defineConfig({
    extends: [react],
    rules: {
        'jsx-a11y/anchor-is-valid': [
            'error',
            { components: ['Link'], specialLink: ['to'] }
        ],
        'react/jsx-no-script-url': [
            'error',
            [{ name: 'Script', props: ['src'] }],
            { includeFromSettings: true }
        ]
    }
} as const);
