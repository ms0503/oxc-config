export declare const reactJSXRules: {
    readonly rules: {
        readonly 'react/jsx-boolean-value': ["error", "never", {
            readonly always: readonly [];
            readonly assumeUndefinedIsFalse: true;
        }];
        readonly 'react/jsx-curly-brace-presence': ["error", {
            readonly children: "never";
            readonly propElementValues: "always";
            readonly props: "never";
        }];
        readonly 'react/jsx-filename-extension': "off";
        readonly 'react/jsx-fragments': ["error", "syntax"];
        readonly 'react/jsx-handler-names': ["error", {
            readonly checkInlineFunctions: true;
            readonly checkLocalVariables: true;
            readonly eventHandlerPrefixes: "handle";
            readonly eventHandlerPropPrefixes: "on";
            readonly eventHandlerPropRegex: "";
            readonly eventHandlerRegex: "";
            readonly ignoreComponentNames: readonly [];
        }];
        readonly 'react/jsx-key': ["error", {
            readonly checkFragmentShorthand: true;
            readonly checkKeyMustBeforeSpread: true;
            readonly warnOnDuplicates: true;
        }];
        readonly 'react/jsx-max-depth': ["error", {
            readonly max: number;
        }];
        readonly 'react/jsx-no-comment-textnodes': "error";
        readonly 'react/jsx-no-constructed-context-values': "error";
        readonly 'react/jsx-no-duplicate-props': "error";
        readonly 'react/jsx-no-script-url': ["error", {
            readonly components: {};
            readonly includeFromSettings: false;
        }];
        readonly 'react/jsx-no-target-blank': ["error", {
            readonly allowReferrer: false;
            readonly enforceDynamicLinks: "always";
            readonly forms: false;
            readonly links: true;
            readonly warnOnSpreadAttributes: false;
        }];
        readonly 'react/jsx-no-undef': "error";
        readonly 'react/jsx-no-useless-fragment': ["error", {
            readonly allowExpressions: true;
        }];
        readonly 'react/jsx-pascal-case': ["error", {
            readonly allowAllCaps: false;
            readonly allowLeadingUnderscore: false;
            readonly allowNamespace: true;
            readonly ignore: readonly [];
        }];
        readonly 'react/jsx-props-no-spread-multi': "error";
        readonly 'react/jsx-props-no-spreading': "off";
    };
};
