import type { OxlintGlobals } from "oxlint";

/**
 * Converts global variable definitions in 'globals' to oxlint-compatible definitions.
 *
 * @param inputs Global variable definitions in 'globals'
 * @returns Oxlint-compatible global variable definitions
 */
export function convertGlobals(inputs: Record<string, boolean>): OxlintGlobals {
    return Object.fromEntries(
        Object.entries(inputs).map(([k, v]) => [
            k,
            v ? "writable" : "readonly",
        ]),
    );
}
