import { defineConfig } from 'oxlint';

export const reactRules = defineConfig({
    rules: {
        'react/button-has-type': [
            'error',
            { button: true, reset: true, submit: true }
        ],
        'react/checked-requires-onchange-or-readonly': [
            'error',
            {
                ignoreExclusiveCheckedAttribute: false,
                ignoreMissingProperties: false
            }
        ],
        'react/display-name': [
            'error',
            { checkContextObjects: true, ignoreTranspilerName: false }
        ],
        'react/exhaustive-deps': ['error', { additionalHooks: null }],
        'react/forbid-dom-props': [
            'error',
            {
                forbid: [
                    { message: 'Use className instead', propName: 'class' }
                ]
            }
        ],
        'react/forbid-elements': ['error', { forbid: [] }],
        'react/forward-ref-uses-ref': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-did-mount-set-state': ['error', 'allowed'],
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-namespace': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'error',
        'react/no-string-refs': ['error', { noTemplateLiterals: true }],
        'react/no-this-in-sfc': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': [
            'error',
            { ignore: [], requireDataLowercase: false }
        ],
        'react/no-unsafe': ['error', { checkAliases: true }],
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],
        'react/only-export-components': [
            'error',
            {
                allowConstantExport: false,
                allowExportNames: [
                    'action',
                    'clientAction',
                    'clientLoader',
                    'headers',
                    'generateImageMetadata',
                    'generateMetadata',
                    'generateStaticParams',
                    'generateViewport',
                    'getInitialProps',
                    'getServerSideProps',
                    'getStaticPaths',
                    'getStaticProps',
                    'links',
                    'loader',
                    'meta',
                    'metadata',
                    'shouldRevalidate',
                    'viewport'
                ],
                checkJS: false,
                customHOCs: []
            }
        ],
        'react/prefer-es6-class': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/require-render-return': 'error',
        'react/rules-of-hooks': 'error',
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'react/state-in-constructor': ['error', 'never'],
        'react/style-prop-object': ['error', { allow: [] }],
        'react/void-dom-elements-no-children': 'error'
    }
});
