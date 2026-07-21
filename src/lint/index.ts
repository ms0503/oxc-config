import {
    coreRules,
    jsxRules,
    nextjsRules,
    reactRules,
    vueRules
} from './rules/index.ts';
import { defineConfig } from 'oxlint';

/**
 * Core configuration
 *
 * Framework-independent minimal settings.
 */
export const core: ReturnType<typeof defineConfig> = defineConfig({
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

/**
 * JSX configuration
 *
 * JSX-specific settings.
 */
export const jsx: ReturnType<typeof defineConfig> = defineConfig({
    extends: [jsxRules],
    plugins: ['jsx-a11y', 'react', 'react-perf']
} as const);

/**
 * Framework configuration for Hono
 *
 * Config for Hono, which loads core and jsx configs.
 */
export const hono: ReturnType<typeof defineConfig> = defineConfig({
    extends: [core, jsx]
} as const);

/**
 * Framework configuration for React
 *
 * Config for React, which loads core and jsx configs and adds React-specific settings.
 */
export const react: ReturnType<typeof defineConfig> = defineConfig({
    extends: [core, jsx, reactRules]
} as const);

/**
 * Framework configuration for Vue
 *
 * Config for Vue, which loads core configs and adds Vue-specific settings.
 */
export const vue: ReturnType<typeof defineConfig> = defineConfig({
    extends: [core, vueRules],
    plugins: ['vue']
} as const);

/**
 * Full-stack framework configuration for HonoX
 *
 * Config for HonoX, which loads hono configs and adds HonoX-specific settings.
 */
export const honox: ReturnType<typeof defineConfig> = defineConfig({
    extends: [hono],
    rules: {
        'react/jsx-no-script-url': [
            'error',
            [{ name: 'Script', props: ['src'] }],
            { includeFromSettings: true }
        ]
    }
} as const);

/**
 * Full-stack framework configuration for Next.js
 *
 * Config for Next.js, which loads react configs and adds Next.js-specific settings.
 */
export const nextjs: ReturnType<typeof defineConfig> = defineConfig({
    extends: [react, nextjsRules],
    plugins: ['nextjs']
} as const);

/**
 * Full-stack framework configuration for React Router (v7+)
 *
 * Config for React Router (v7+), which loads react configs and adds React Router-specific settings.
 */
export const reactRouter: ReturnType<typeof defineConfig> = defineConfig({
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
