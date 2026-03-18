import { defineConfig } from 'oxlint';

export const coreSettings = defineConfig({ settings: {} } as const);

export const reactSettings = defineConfig({
    settings: { 'jsx-a11y': { components: { Link: 'a' } } }
} as const);

export const vueSettings = defineConfig({ settings: {} } as const);
