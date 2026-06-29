import { coreRules, jsxRules, nextjsRules, reactRules, vueRules } from './rules/index.js';
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
});
export const jsx = defineConfig({
    extends: [jsxRules],
    plugins: ['jsx-a11y', 'react', 'react-perf']
});
export const hono = defineConfig({ extends: [core, jsx] });
export const react = defineConfig({
    extends: [core, jsx, reactRules]
});
export const vue = defineConfig({
    extends: [core, vueRules],
    plugins: ['vue']
});
export const honox = defineConfig({
    extends: [hono],
    rules: {
        'react/jsx-no-script-url': [
            'error',
            [{ name: 'Script', props: ['src'] }],
            { includeFromSettings: true }
        ]
    }
});
export const nextjs = defineConfig({
    extends: [react, nextjsRules],
    plugins: ['nextjs']
});
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
});
