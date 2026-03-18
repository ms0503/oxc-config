export declare const reactRules: {
    readonly rules: {
        readonly 'react/button-has-type': ["error", {
            readonly button: true;
            readonly reset: true;
            readonly submit: true;
        }];
        readonly 'react/checked-requires-onchange-or-readonly': ["error", {
            readonly ignoreExclusiveCheckedAttribute: false;
            readonly ignoreMissingProperties: false;
        }];
        readonly 'react/display-name': ["error", {
            readonly checkContextObjects: true;
            readonly ignoreTranspilerName: false;
        }];
        readonly 'react/exhaustive-deps': ["error", {
            readonly additionalHooks: null;
        }];
        readonly 'react/forbid-dom-props': ["error", {
            readonly forbid: readonly [{
                readonly message: "Use className instead";
                readonly propName: "class";
            }];
        }];
        readonly 'react/forbid-elements': ["error", {
            readonly forbid: readonly [];
        }];
        readonly 'react/forward-ref-uses-ref': "error";
        readonly 'react/iframe-missing-sandbox': "error";
        readonly 'react/no-array-index-key': "error";
        readonly 'react/no-children-prop': "error";
        readonly 'react/no-danger': "error";
        readonly 'react/no-danger-with-children': "error";
        readonly 'react/no-did-mount-set-state': ["error", "allowed"];
        readonly 'react/no-direct-mutation-state': "error";
        readonly 'react/no-find-dom-node': "error";
        readonly 'react/no-is-mounted': "error";
        readonly 'react/no-multi-comp': "off";
        readonly 'react/no-namespace': "error";
        readonly 'react/no-redundant-should-component-update': "error";
        readonly 'react/no-render-return-value': "error";
        readonly 'react/no-set-state': "error";
        readonly 'react/no-string-refs': ["error", {
            readonly noTemplateLiterals: true;
        }];
        readonly 'react/no-this-in-sfc': "error";
        readonly 'react/no-unescaped-entities': "error";
        readonly 'react/no-unknown-property': ["error", {
            readonly ignore: readonly [];
            readonly requireDataLowercase: false;
        }];
        readonly 'react/no-unsafe': ["error", {
            readonly checkAliases: true;
        }];
        readonly 'react/no-will-update-set-state': ["error", "disallow-in-func"];
        readonly 'react/only-export-components': ["error", {
            readonly allowConstantExport: false;
            readonly allowExportNames: readonly ["action", "clientAction", "clientLoader", "headers", "generateImageMetadata", "generateMetadata", "generateStaticParams", "generateViewport", "getInitialProps", "getServerSideProps", "getStaticPaths", "getStaticProps", "links", "loader", "meta", "metadata", "shouldRevalidate", "viewport"];
            readonly checkJS: false;
            readonly customHOCs: readonly [];
        }];
        readonly 'react/prefer-es6-class': ["error", "always"];
        readonly 'react/react-in-jsx-scope': "off";
        readonly 'react/require-render-return': "error";
        readonly 'react/rules-of-hooks': "error";
        readonly 'react/self-closing-comp': ["error", {
            readonly component: true;
            readonly html: true;
        }];
        readonly 'react/state-in-constructor': ["error", "never"];
        readonly 'react/style-prop-object': ["error", {
            readonly allow: readonly [];
        }];
        readonly 'react/void-dom-elements-no-children': "error";
    };
};
