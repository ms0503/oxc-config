import { defineConfig } from 'oxlint';
export const jsxA11yRules = defineConfig({
    rules: {
        'jsx-a11y/alt-text': [
            'error',
            {
                area: [],
                img: ['Image', 'NextImage'],
                'input[type="image"]': [],
                object: []
            }
        ],
        'jsx-a11y/anchor-ambiguous-text': [
            'error',
            {
                words: [
                    'a link',
                    'click here',
                    'here',
                    'learn more',
                    'link',
                    'こいつ',
                    'ここ',
                    'こちら',
                    'こちらのリンク',
                    'この',
                    'このリンク',
                    'こやつ',
                    'これ',
                    'コイツ',
                    'ココ',
                    'コチラ',
                    'コチラのリンク',
                    'コヤツ',
                    'コレ',
                    'リンク',
                    'ｺｲﾂ',
                    'ｺｺ',
                    'ｺﾁﾗ',
                    'ｺﾔﾂ',
                    'ｺﾚ'
                ]
            }
        ],
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': ['error', { validHrefs: [] }],
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': [
            'error',
            { allowedInvalidRoles: [], ignoreNonDOM: false }
        ],
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': [
            'error',
            { inputComponents: ['input'] }
        ],
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/heading-has-content': ['error', { components: [] }],
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': [
            'error',
            {
                components: ['Image', 'NextImage', 'img'],
                words: ['image', 'photo', 'picture']
            }
        ],
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                assert: 'htmlFor',
                controlComponents: [],
                depth: 2,
                labelAttributes: ['alt', 'aria-label', 'aria-labelledby'],
                labelComponents: ['label']
            }
        ],
        'jsx-a11y/lang': 'error',
        'jsx-a11y/media-has-caption': [
            'error',
            { audio: ['audio'], track: ['track'], video: ['video'] }
        ],
        'jsx-a11y/mouse-events-have-key-events': [
            'error',
            {
                hoverInHandlers: ['onMouseOver'],
                hoverOutHandlers: ['onMouseOut']
            }
        ],
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: false }],
        'jsx-a11y/no-distracting-elements': [
            'error',
            { elements: ['blink', 'marquee'] }
        ],
        'jsx-a11y/no-noninteractive-tabindex': [
            'error',
            { allowExpressionValues: true, roles: ['tabpanel'], tags: [] }
        ],
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/prefer-tag-over-role': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error'
    }
});
