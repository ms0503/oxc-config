import type { OxfmtOverrideConfig } from 'oxfmt';

export const markdown = [
    {
        files: ['*.md'],
        options: { embeddedLanguageFormatting: 'off', tabWidth: 2 }
    }
] as const satisfies Array<OxfmtOverrideConfig>;
