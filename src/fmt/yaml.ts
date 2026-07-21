import type { OxfmtOverrideConfig } from 'oxfmt';

export const yaml = [
    {
        files: ['*.yaml', '*.yml', '.yamlfmt', '.yamllint'],
        options: { tabWidth: 2 }
    }
] as const satisfies Array<OxfmtOverrideConfig>;
