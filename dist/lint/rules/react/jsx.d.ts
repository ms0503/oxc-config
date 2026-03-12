export declare const reactJSXRules: {
    rules: {
        'react/jsx-boolean-value': (string | {
            always: never[];
            assumeUndefinedIsFalse: boolean;
        })[];
        'react/jsx-curly-brace-presence': (string | {
            children: string;
            propElementValues: string;
            props: string;
        })[];
        'react/jsx-filename-extension': (string | {
            allow: string;
            extensions: string[];
            ignoreFilesWithoutCode: boolean;
        })[];
        'react/jsx-fragments': string[];
        'react/jsx-handler-names': (string | {
            checkInlineFunctions: boolean;
            checkLocalVariables: boolean;
            eventHandlerPrefixes: string;
            eventHandlerPropPrefixes: string;
            eventHandlerPropRegex: string;
            eventHandlerRegex: string;
            ignoreComponentNames: never[];
        })[];
        'react/jsx-key': (string | {
            checkFragmentShorthand: boolean;
            checkKeyMustBeforeSpread: boolean;
            warnOnDuplicates: boolean;
        })[];
        'react/jsx-max-depth': (string | {
            max: number;
        })[];
        'react/jsx-no-comment-textnodes': "error";
        'react/jsx-no-constructed-context-values': "error";
        'react/jsx-no-duplicate-props': "error";
        'react/jsx-no-script-url': (string | {
            components: {};
            includeFromSettings: boolean;
        })[];
        'react/jsx-no-target-blank': (string | {
            allowReferrer: boolean;
            enforceDynamicLinks: string;
            forms: boolean;
            links: boolean;
            warnOnSpreadAttributes: boolean;
        })[];
        'react/jsx-no-undef': "error";
        'react/jsx-no-useless-fragment': (string | {
            allowExpressions: boolean;
        })[];
        'react/jsx-pascal-case': (string | {
            allowAllCaps: boolean;
            allowLeadingUnderscore: boolean;
            allowNamespace: boolean;
            ignore: never[];
        })[];
        'react/jsx-props-no-spread-multi': "error";
        'react/jsx-props-no-spreading': "off";
    };
};
