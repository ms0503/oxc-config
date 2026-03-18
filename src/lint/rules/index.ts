import { eslintRules } from './eslint.js';
import { importRules } from './import.js';
import { jsxA11yRules } from './jsx-a11y.js';
import { nextjsRules as nextjsRulesCfg } from './nextjs.js';
import { nodeRules } from './node.js';
import { oxcRules } from './oxc.js';
import { promiseRules } from './promise.js';
import { reactPerfRules } from './react-perf/index.js';
import { reactPerfJSXRules } from './react-perf/jsx.js';
import { reactRules as reactRulesCfg } from './react/index.js';
import { reactJSXRules } from './react/jsx.js';
import { typescriptRules } from './typescript.js';
import { unicornRules } from './unicorn.js';
import { vitestRules } from './vitest.js';
import { vueRules as vueRulesCfg } from './vue.js';
import { defineConfig } from 'oxlint';

export const coreRules = defineConfig({
    extends: [
        eslintRules,
        importRules,
        nodeRules,
        oxcRules,
        promiseRules,
        typescriptRules,
        unicornRules,
        vitestRules
    ]
} as const);

export const jsxRules = defineConfig({
    extends: [jsxA11yRules, reactJSXRules, reactPerfJSXRules]
} as const);

export const nextjsRules = defineConfig({ extends: [nextjsRulesCfg] } as const);

export const reactRules = defineConfig({
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

export const vueRules = defineConfig({ extends: [vueRulesCfg] } as const);
