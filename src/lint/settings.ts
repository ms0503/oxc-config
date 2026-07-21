import { defineConfig } from 'oxlint';

export const coreSettings: ReturnType<typeof defineConfig> = defineConfig({
    settings: {}
} as const);

export const reactSettings: ReturnType<typeof defineConfig> = defineConfig({
    settings: { 'jsx-a11y': { components: { Link: 'a' } } }
} as const);

export const vueSettings: ReturnType<typeof defineConfig> = defineConfig({
    settings: {}
} as const);
