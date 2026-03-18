export declare const importRules: {
    readonly overrides: [{
        readonly files: ["*.config.cjs", "*.config.js", "*.config.mjs", "*.config.ts"];
        readonly rules: {
            readonly 'import/no-default-export': "off";
        };
    }];
    readonly rules: {
        readonly 'import/consistent-type-specifier-style': ["error", "prefer-top-level"];
        readonly 'import/default': "error";
        readonly 'import/export': "error";
        readonly 'import/exports-last': "off";
        readonly 'import/extensions': ["error", "never", {
            readonly checkTypeImports: true;
            readonly ignorePackages: false;
            readonly pathGroupOverrides: readonly [];
        }];
        readonly 'import/first': ["error", "disable-absolute-first"];
        readonly 'import/group-exports': "off";
        readonly 'import/max-dependencies': "off";
        readonly 'import/named': "error";
        readonly 'import/namespace': ["error", {
            readonly allowComputed: true;
        }];
        readonly 'import/no-absolute-path': ["error", {
            readonly amd: false;
            readonly commonjs: true;
            readonly esmodule: true;
        }];
        readonly 'import/no-amd': "error";
        readonly 'import/no-anonymous-default-export': ["error", {
            readonly allowAnonymousClass: false;
            readonly allowAnonymousFunction: false;
            readonly allowArray: true;
            readonly allowArrowFunction: false;
            readonly allowCallExpression: true;
            readonly allowLiteral: false;
            readonly allowNew: false;
            readonly allowObject: true;
        }];
        readonly 'import/no-commonjs': "error";
        readonly 'import/no-cycle': ["error", {
            readonly allowUnsafeDynamicCyclicDependency: false;
            readonly ignoreExternal: false;
            readonly ignoreTypes: true;
            readonly maxDepth: number;
        }];
        readonly 'import/no-default-export': "error";
        readonly 'import/no-duplicates': ["error", {
            readonly considerQueryString: true;
            readonly preferInline: false;
        }];
        readonly 'import/no-dynamic-require': ["error", {
            readonly esmodule: false;
        }];
        readonly 'import/no-empty-named-blocks': "error";
        readonly 'import/no-mutable-exports': "error";
        readonly 'import/no-named-as-default': "error";
        readonly 'import/no-named-as-default-member': "error";
        readonly 'import/no-named-default': "error";
        readonly 'import/no-named-export': "off";
        readonly 'import/no-namespace': ["error", {
            readonly ignore: readonly [];
        }];
        readonly 'import/no-nodejs-modules': "off";
        readonly 'import/no-relative-parent-imports': "error";
        readonly 'import/no-self-import': "error";
        readonly 'import/no-unassigned-import': "off";
        readonly 'import/no-webpack-loader-syntax': "error";
        readonly 'import/prefer-default-export': "off";
        readonly 'import/unambiguous': "error";
    };
};
