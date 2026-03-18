export declare const perfectionistRules: {
    readonly rules: {
        readonly 'perfectionist/sort-array-includes': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly ["literal"];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-classes': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly ["index-signature", {
                readonly newlinesBetween: 1;
            }, readonly ["static-readonly-accessor-property", "static-readonly-property"], readonly ["protected-static-readonly-accessor-property", "protected-static-readonly-property"], readonly ["private-static-readonly-accessor-property", "private-static-readonly-property"], {
                readonly newlinesBetween: 1;
            }, readonly ["static-accessor-property", "static-property"], readonly ["protected-static-accessor-property", "protected-static-property"], readonly ["private-static-accessor-property", "private-static-property"], {
                readonly newlinesBetween: 1;
            }, {
                readonly group: readonly ["static-get-method", "static-set-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["protected-static-get-method", "protected-static-set-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["private-static-get-method", "private-static-set-method"];
                readonly newlinesInside: 1;
            }, {
                readonly newlinesBetween: 1;
            }, "static-block", {
                readonly newlinesBetween: 1;
            }, readonly ["accessor-property", "property"], readonly ["protected-accessor-property", "protected-property"], readonly ["private-accessor-property", "private-property"], {
                readonly newlinesBetween: 1;
            }, {
                readonly group: readonly ["get-method", "set-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["protected-get-method", "protected-set-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["private-get-method", "private-set-method"];
                readonly newlinesInside: 1;
            }, {
                readonly newlinesBetween: 1;
            }, {
                readonly group: "constructor";
                readonly newlinesInside: 1;
            }, {
                readonly newlinesBetween: 1;
            }, {
                readonly group: readonly ["static-function-property", "static-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["protected-static-function-property", "protected-static-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["private-static-function-property", "private-static-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["function-property", "method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["protected-function-property", "protected-method"];
                readonly newlinesInside: 1;
            }, {
                readonly group: readonly ["private-function-property", "private-method"];
                readonly newlinesInside: 1;
            }, {
                readonly newlinesBetween: 1;
            }, {
                readonly group: "unknown";
                readonly newlinesInside: 1;
            }];
            readonly ignoreCallbackDependenciesPatterns: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
            readonly useExperimentalDependencyDetection: true;
        }];
        readonly 'perfectionist/sort-decorators': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly sortOnAccessors: true;
            readonly sortOnClasses: true;
            readonly sortOnMethods: true;
            readonly sortOnParameters: true;
            readonly sortOnProperties: true;
        }];
        readonly 'perfectionist/sort-enums': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly sortByValue: "never";
            readonly useConfigurationIf: {};
            readonly useExperimentalDependencyDetection: true;
        }];
        readonly 'perfectionist/sort-export-attributes': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-exports': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
        }];
        readonly 'perfectionist/sort-heritage-clauses': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-import-attributes': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-imports': "off";
        readonly 'perfectionist/sort-interfaces': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly ["index-signature", {
                readonly newlinesBetween: 1;
            }, "property", {
                readonly newlinesBetween: 1;
            }, {
                readonly group: "method";
                readonly newlinesInside: 1;
            }, {
                readonly newlinesBetween: 1;
            }, {
                readonly group: "unknown";
                readonly newlinesInside: 1;
            }];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly sortBy: "name";
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-intersection-types': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-jsx-props': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-maps': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-modules': "off";
        readonly 'perfectionist/sort-named-exports': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly ignoreAlias: false;
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-named-imports': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly ["value-import", "type-import", {
                readonly newlinesBetween: 1;
            }, "unknown"];
            readonly ignoreAlias: false;
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-object-types': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly ["index-signature", {
                readonly newlinesBetween: 1;
            }, "property", {
                readonly newlinesBetween: 1;
            }, {
                readonly group: "method";
                readonly newlinesInside: 1;
            }, {
                readonly newlinesBetween: 1;
            }, {
                readonly group: "unknown";
                readonly newlinesInside: 1;
            }];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly sortBy: "name";
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-objects': "off";
        readonly 'perfectionist/sort-sets': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly ["literal"];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-switch-case': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
        }];
        readonly 'perfectionist/sort-union-types': ["error", {
            readonly fallbackSort: {
                readonly type: "unsorted";
            };
            readonly ignoreCase: false;
            readonly locales: "en-US";
            readonly order: "asc";
            readonly specialCharacters: "keep";
            readonly type: "alphabetical";
            readonly customGroups: readonly [];
            readonly groups: readonly [];
            readonly newlinesBetween: 0;
            readonly newlinesInside: 0;
            readonly partitionByComment: false;
            readonly partitionByNewLine: false;
            readonly useConfigurationIf: {};
        }];
        readonly 'perfectionist/sort-variable-declarations': "off";
    };
};
