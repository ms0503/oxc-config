export function convertGlobals(inputs) {
    return Object.fromEntries(Object.entries(inputs).map(([k, v]) => [k, v ? 'writable' : 'readonly']));
}
