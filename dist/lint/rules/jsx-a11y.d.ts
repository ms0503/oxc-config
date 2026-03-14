export declare const jsxA11yRules: {
    rules: {
        "jsx-a11y/alt-text": (string | {
            area: never[];
            img: string[];
            'input[type="image"]': never[];
            object: never[];
        })[];
        "jsx-a11y/anchor-ambiguous-text": (string | {
            words: string[];
        })[];
        "jsx-a11y/anchor-has-content": "error";
        "jsx-a11y/anchor-is-valid": (string | {
            validHrefs: never[];
        })[];
        "jsx-a11y/aria-activedescendant-has-tabindex": "error";
        "jsx-a11y/aria-props": "error";
        "jsx-a11y/aria-proptypes": "error";
        "jsx-a11y/aria-role": (string | {
            allowedInvalidRoles: never[];
            ignoreNonDOM: boolean;
        })[];
        "jsx-a11y/aria-unsupported-elements": "error";
        "jsx-a11y/autocomplete-valid": (string | {
            inputComponents: string[];
        })[];
        "jsx-a11y/click-events-have-key-events": "error";
        "jsx-a11y/heading-has-content": (string | {
            components: never[];
        })[];
        "jsx-a11y/html-has-lang": "error";
        "jsx-a11y/iframe-has-title": "error";
        "jsx-a11y/img-redundant-alt": (string | {
            components: string[];
            words: string[];
        })[];
        "jsx-a11y/label-has-associated-control": (string | {
            assert: string;
            controlComponents: never[];
            depth: number;
            labelAttributes: string[];
            labelComponents: string[];
        })[];
        "jsx-a11y/lang": "error";
        "jsx-a11y/media-has-caption": (string | {
            audio: string[];
            track: string[];
            video: string[];
        })[];
        "jsx-a11y/mouse-events-have-key-events": (string | {
            hoverInHandlers: string[];
            hoverOutHandlers: string[];
        })[];
        "jsx-a11y/no-access-key": "error";
        "jsx-a11y/no-aria-hidden-on-focusable": "error";
        "jsx-a11y/no-autofocus": (string | {
            ignoreNonDOM: boolean;
        })[];
        "jsx-a11y/no-distracting-elements": (string | {
            elements: string[];
        })[];
        "jsx-a11y/no-noninteractive-tabindex": (string | {
            allowExpressionValues: boolean;
            roles: string[];
            tags: never[];
        })[];
        "jsx-a11y/no-redundant-roles": "error";
        "jsx-a11y/no-static-element-interactions": "error";
        "jsx-a11y/prefer-tag-over-role": "error";
        "jsx-a11y/role-has-required-aria-props": "error";
        "jsx-a11y/role-supports-aria-props": "error";
        "jsx-a11y/scope": "error";
        "jsx-a11y/tabindex-no-positive": "error";
    };
};
