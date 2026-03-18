import { defineConfig } from 'oxlint';

export const reactPerfJSXRules = defineConfig({
    rules: {
        'react-perf/jsx-no-jsx-as-prop': 'error',
        'react-perf/jsx-no-new-array-as-prop': 'error',
        'react-perf/jsx-no-new-function-as-prop': 'error',
        'react-perf/jsx-no-new-object-as-prop': 'error'
    }
} as const);
