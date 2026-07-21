import { eslintRules } from './eslint.ts';
import { importRules } from './import.ts';
import { jsxA11yRules } from './jsx-a11y.ts';
import { nextjsRules as nextjsRulesCfg } from './nextjs.ts';
import { nodeRules } from './node.ts';
import { oxcRules } from './oxc.ts';
import { perfectionistRules } from './perfectionist.ts';
import { promiseRules } from './promise.ts';
import { reactPerfRules } from './react-perf/index.ts';
import { reactPerfJSXRules } from './react-perf/jsx.ts';
import { reactRules as reactRulesCfg } from './react/index.ts';
import { reactJSXRules } from './react/jsx.ts';
import { typescriptRules } from './typescript.ts';
import { unicornRules } from './unicorn.ts';
import { vitestRules } from './vitest.ts';
import { vueRules as vueRulesCfg } from './vue.ts';
import { defineConfig } from 'oxlint';

export const coreRules: ReturnType<typeof defineConfig> = defineConfig({
    extends: [
        eslintRules,
        importRules,
        nodeRules,
        oxcRules,
        perfectionistRules,
        promiseRules,
        typescriptRules,
        unicornRules,
        vitestRules
    ]
} as const);

export const jsxRules: ReturnType<typeof defineConfig> = defineConfig({
    extends: [jsxA11yRules, reactJSXRules, reactPerfJSXRules]
} as const);

export const nextjsRules: ReturnType<typeof defineConfig> = defineConfig({
    extends: [nextjsRulesCfg]
} as const);

export const reactRules: ReturnType<typeof defineConfig> = defineConfig({
    extends: [reactPerfRules, reactRulesCfg],
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            rules: { 'import/no-default-export': 'off' }
        }
    ],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            {
                allow: 'as-needed',
                extensions: ['jsx', 'tsx'],
                ignoreFilesWithoutCode: true
            }
        ]
    }
} as const);

export const vueRules: ReturnType<typeof defineConfig> = defineConfig({
    extends: [vueRulesCfg]
} as const);
