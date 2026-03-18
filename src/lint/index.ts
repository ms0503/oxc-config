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

export const hono = defineConfig({ extends: [jsx] } as const);

export const react = defineConfig({
    extends: [core, jsx, reactRules]
} as const);

export const vue = defineConfig({
    extends: [core, vueRules],
    plugins: ['vue']
} as const);

export const nextjs = defineConfig({
    extends: [react, nextjsRules],
    plugins: ['nextjs']
} as const);
