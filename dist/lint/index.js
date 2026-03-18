import { coreRules, jsxRules, nextjsRules, reactRules, vueRules } from './rules/index.js';
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
});
export const jsx = defineConfig({
    extends: [jsxRules],
    plugins: ['jsx-a11y', 'react', 'react-perf']
});
export const hono = defineConfig({ extends: [jsx] });
export const react = defineConfig({
    extends: [core, jsx, reactRules]
});
export const vue = defineConfig({
    extends: [core, vueRules],
    plugins: ['vue']
});
export const nextjs = defineConfig({
    extends: [react, nextjsRules],
    plugins: ['nextjs']
});
