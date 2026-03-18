export declare const jsxA11yRules: {
    readonly rules: {
        readonly 'jsx-a11y/alt-text': ["error", {
            readonly area: readonly [];
            readonly img: readonly ["Image", "NextImage"];
            readonly 'input[type="image"]': readonly [];
            readonly object: readonly [];
        }];
        readonly 'jsx-a11y/anchor-ambiguous-text': ["error", {
            readonly words: readonly ["a link", "click here", "here", "learn more", "link", "こいつ", "ここ", "こちら", "こちらのリンク", "この", "このリンク", "こやつ", "これ", "コイツ", "ココ", "コチラ", "コチラのリンク", "コヤツ", "コレ", "リンク", "ｺｲﾂ", "ｺｺ", "ｺﾁﾗ", "ｺﾔﾂ", "ｺﾚ"];
        }];
        readonly 'jsx-a11y/anchor-has-content': "error";
        readonly 'jsx-a11y/anchor-is-valid': ["error", {
            readonly validHrefs: readonly [];
        }];
        readonly 'jsx-a11y/aria-activedescendant-has-tabindex': "error";
        readonly 'jsx-a11y/aria-props': "error";
        readonly 'jsx-a11y/aria-proptypes': "error";
        readonly 'jsx-a11y/aria-role': ["error", {
            readonly allowedInvalidRoles: readonly [];
            readonly ignoreNonDOM: false;
        }];
        readonly 'jsx-a11y/aria-unsupported-elements': "error";
        readonly 'jsx-a11y/autocomplete-valid': ["error", {
            readonly inputComponents: readonly ["input"];
        }];
        readonly 'jsx-a11y/click-events-have-key-events': "error";
        readonly 'jsx-a11y/heading-has-content': ["error", {
            readonly components: readonly [];
        }];
        readonly 'jsx-a11y/html-has-lang': "error";
        readonly 'jsx-a11y/iframe-has-title': "error";
        readonly 'jsx-a11y/img-redundant-alt': ["error", {
            readonly components: readonly ["Image", "NextImage", "img"];
            readonly words: readonly ["image", "photo", "picture"];
        }];
        readonly 'jsx-a11y/label-has-associated-control': ["error", {
            readonly assert: "htmlFor";
            readonly controlComponents: readonly [];
            readonly depth: 2;
            readonly labelAttributes: readonly ["alt", "aria-label", "aria-labelledby"];
            readonly labelComponents: readonly ["label"];
        }];
        readonly 'jsx-a11y/lang': "error";
        readonly 'jsx-a11y/media-has-caption': ["error", {
            readonly audio: readonly ["audio"];
            readonly track: readonly ["track"];
            readonly video: readonly ["video"];
        }];
        readonly 'jsx-a11y/mouse-events-have-key-events': ["error", {
            readonly hoverInHandlers: readonly ["onMouseOver"];
            readonly hoverOutHandlers: readonly ["onMouseOut"];
        }];
        readonly 'jsx-a11y/no-access-key': "error";
        readonly 'jsx-a11y/no-aria-hidden-on-focusable': "error";
        readonly 'jsx-a11y/no-autofocus': ["error", {
            readonly ignoreNonDOM: false;
        }];
        readonly 'jsx-a11y/no-distracting-elements': ["error", {
            readonly elements: readonly ["blink", "marquee"];
        }];
        readonly 'jsx-a11y/no-noninteractive-tabindex': ["error", {
            readonly allowExpressionValues: true;
            readonly roles: readonly ["tabpanel"];
            readonly tags: readonly [];
        }];
        readonly 'jsx-a11y/no-redundant-roles': "error";
        readonly 'jsx-a11y/no-static-element-interactions': "error";
        readonly 'jsx-a11y/prefer-tag-over-role': "error";
        readonly 'jsx-a11y/role-has-required-aria-props': "error";
        readonly 'jsx-a11y/role-supports-aria-props': "error";
        readonly 'jsx-a11y/scope': "error";
        readonly 'jsx-a11y/tabindex-no-positive': "error";
    };
};
