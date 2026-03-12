import { defineConfig } from 'oxlint';

export const coreSettings = defineConfig({ settings: {} });

export const reactSettings = defineConfig({
    settings: { 'jsx-a11y': { components: { Link: 'a' } } }
});

export const vueSettings = defineConfig({ settings: {} });
