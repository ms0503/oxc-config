export declare const vueRules: {
    readonly rules: {
        readonly 'vue/define-emits-declaration': ["error", "type-literal"];
        readonly 'vue/define-props-declaration': ["error", "type-based"];
        readonly 'vue/define-props-destructuring': ["error", {
            readonly destructure: "always";
        }];
        readonly 'vue/max-props': "off";
        readonly 'vue/no-arrow-functions-in-watch': "error";
        readonly 'vue/no-deprecated-destroyed-lifecycle': "error";
        readonly 'vue/no-export-in-script-setup': "error";
        readonly 'vue/no-import-compiler-macros': "error";
        readonly 'vue/no-lifecycle-after-await': "error";
        readonly 'vue/no-multiple-slot-args': "error";
        readonly 'vue/no-required-prop-with-default': "error";
        readonly 'vue/no-this-in-before-route-enter': "error";
        readonly 'vue/prefer-import-from-vue': "error";
        readonly 'vue/require-default-export': "error";
        readonly 'vue/require-typed-ref': "error";
        readonly 'vue/valid-define-emits': "error";
        readonly 'vue/valid-define-props': "error";
    };
};
