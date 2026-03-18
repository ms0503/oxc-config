import { defineConfig } from 'oxlint';

export const reactJSXRules = defineConfig({
    rules: {
        'react/jsx-boolean-value': [
            'error',
            'never',
            { always: [], assumeUndefinedIsFalse: true }
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            { children: 'never', propElementValues: 'always', props: 'never' }
        ],
        'react/jsx-filename-extension': 'off',
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': [
            'error',
            {
                checkInlineFunctions: true,
                checkLocalVariables: true,
                eventHandlerPrefixes: 'handle',
                eventHandlerPropPrefixes: 'on',
                eventHandlerPropRegex: '',
                eventHandlerRegex: '',
                ignoreComponentNames: []
            }
        ],
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
                warnOnDuplicates: true
            }
        ],
        'react/jsx-max-depth': ['error', { max: Number.MAX_SAFE_INTEGER }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-script-url': [
            'error',
            { components: {}, includeFromSettings: false }
        ],
        'react/jsx-no-target-blank': [
            'error',
            {
                allowReferrer: false,
                enforceDynamicLinks: 'always',
                forms: false,
                links: true,
                warnOnSpreadAttributes: false
            }
        ],
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: false,
                allowLeadingUnderscore: false,
                allowNamespace: true,
                ignore: []
            }
        ],
        'react/jsx-props-no-spread-multi': 'error',
        'react/jsx-props-no-spreading': 'off'
    }
} as const);
