import type { OxlintGlobals } from 'oxlint';

export function convertGlobals(inputs: Record<string, boolean>): OxlintGlobals {
    return Object.fromEntries(
        Object.entries(inputs).map(([k, v]) => [k, v ? 'writable' : 'readonly'])
    );
}
