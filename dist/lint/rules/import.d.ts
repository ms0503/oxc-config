export declare const importRules: {
    overrides: {
        files: string[];
        rules: {
            'import/no-default-export': "off";
        };
    }[];
    rules: {
        'import/consistent-type-specifier-style': string[];
        'import/default': "error";
        'import/export': "error";
        'import/exports-last': "off";
        'import/extensions': (string | {
            checkTypeImports: boolean;
            ignorePackages: boolean;
            pathGroupOverrides: never[];
        })[];
        'import/first': string[];
        'import/group-exports': "off";
        'import/max-dependencies': "off";
        'import/named': "error";
        'import/namespace': (string | {
            allowComputed: boolean;
        })[];
        'import/no-absolute-path': (string | {
            amd: boolean;
            commonjs: boolean;
            esmodule: boolean;
        })[];
        'import/no-amd': "error";
        'import/no-anonymous-default-export': (string | {
            allowAnonymousClass: boolean;
            allowAnonymousFunction: boolean;
            allowArray: boolean;
            allowArrowFunction: boolean;
            allowCallExpression: boolean;
            allowLiteral: boolean;
            allowNew: boolean;
            allowObject: boolean;
        })[];
        'import/no-commonjs': "error";
        'import/no-cycle': (string | {
            allowUnsafeDynamicCyclicDependency: boolean;
            ignoreExternal: boolean;
            ignoreTypes: boolean;
            maxDepth: number;
        })[];
        'import/no-default-export': "error";
        'import/no-duplicates': (string | {
            considerQueryString: boolean;
            preferInline: boolean;
        })[];
        'import/no-dynamic-require': (string | {
            esmodule: boolean;
        })[];
        'import/no-empty-named-blocks': "error";
        'import/no-mutable-exports': "error";
        'import/no-named-as-default': "error";
        'import/no-named-as-default-member': "error";
        'import/no-named-default': "error";
        'import/no-named-export': "off";
        'import/no-namespace': (string | {
            ignore: never[];
        })[];
        'import/no-nodejs-modules': "off";
        'import/no-relative-parent-imports': "error";
        'import/no-self-import': "error";
        'import/no-unassigned-import': "off";
        'import/no-webpack-loader-syntax': "error";
        'import/prefer-default-export': "off";
        'import/unambiguous': "error";
    };
};
