import { defineConfig } from 'oxlint';
export const nodeRules = defineConfig({
    rules: {
        'node/global-require': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-env': 'off'
    }
});
