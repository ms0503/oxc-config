import { core } from './src/lint/index.ts';
import { defineConfig } from 'oxlint';

export default defineConfig({
    extends: [core],
    ignorePatterns: [],
    rules: { 'import/extensions': 'off' },
    settings: { typeAware: true, typeCheck: true }
});
