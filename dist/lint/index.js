import { defineConfig } from 'oxlint';
import { coreRules, jsxRules, nextjsRules, reactRules, vueRules } from './rules/index.js';
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
});
export const react = defineConfig({
    extends: [core, jsxRules, reactRules],
    plugins: ['jsx-a11y', 'react', 'react-perf']
});
export const vue = defineConfig({
    extends: [core, vueRules],
    plugins: ['vue']
});
export const nextjs = defineConfig({
    extends: [react, nextjsRules],
    plugins: ['nextjs']
});
