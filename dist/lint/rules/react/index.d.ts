export declare const reactRules: {
    rules: {
        'react/button-has-type': (string | {
            button: boolean;
            reset: boolean;
            submit: boolean;
        })[];
        'react/checked-requires-onchange-or-readonly': (string | {
            ignoreExclusiveCheckedAttribute: boolean;
            ignoreMissingProperties: boolean;
        })[];
        'react/display-name': (string | {
            checkContextObjects: boolean;
            ignoreTranspilerName: boolean;
        })[];
        'react/exhaustive-deps': (string | {
            additionalHooks: null;
        })[];
        'react/forbid-dom-props': (string | {
            forbid: {
                message: string;
                propName: string;
            }[];
        })[];
        'react/forbid-elements': (string | {
            forbid: never[];
        })[];
        'react/forward-ref-uses-ref': "error";
        'react/iframe-missing-sandbox': "error";
        'react/no-array-index-key': "error";
        'react/no-children-prop': "error";
        'react/no-danger': "error";
        'react/no-danger-with-children': "error";
        'react/no-did-mount-set-state': string[];
        'react/no-direct-mutation-state': "error";
        'react/no-find-dom-node': "error";
        'react/no-is-mounted': "error";
        'react/no-multi-comp': "off";
        'react/no-namespace': "error";
        'react/no-redundant-should-component-update': "error";
        'react/no-render-return-value': "error";
        'react/no-set-state': "error";
        'react/no-string-refs': (string | {
            noTemplateLiterals: boolean;
        })[];
        'react/no-this-in-sfc': "error";
        'react/no-unescaped-entities': "error";
        'react/no-unknown-property': (string | {
            ignore: never[];
            requireDataLowercase: boolean;
        })[];
        'react/no-unsafe': (string | {
            checkAliases: boolean;
        })[];
        'react/no-will-update-set-state': string[];
        'react/only-export-components': (string | {
            allowConstantExport: boolean;
            allowExportNames: string[];
            checkJS: boolean;
            customHOCs: never[];
        })[];
        'react/prefer-es6-class': string[];
        'react/react-in-jsx-scope': "off";
        'react/require-render-return': "error";
        'react/rules-of-hooks': "error";
        'react/self-closing-comp': (string | {
            component: boolean;
            html: boolean;
        })[];
        'react/state-in-constructor': string[];
        'react/style-prop-object': (string | {
            allow: never[];
        })[];
        'react/void-dom-elements-no-children': "error";
    };
};
