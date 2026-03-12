import { defineConfig } from 'oxlint';
export const vueRules = defineConfig({
    rules: {
        'vue/define-emits-declaration': ['error', 'type-literal'],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/define-props-destructuring': ['error', { destructure: 'always' }],
        'vue/max-props': 'off',
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-deprecated-destroyed-lifecycle': 'error',
        'vue/no-export-in-script-setup': 'error',
        'vue/no-import-compiler-macros': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-multiple-slot-args': 'error',
        'vue/no-required-prop-with-default': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/prefer-import-from-vue': 'error',
        'vue/require-default-export': 'error',
        'vue/require-typed-ref': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-props': 'error'
    }
});
