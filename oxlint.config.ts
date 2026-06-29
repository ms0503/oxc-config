import { core } from './dist/lint/index.js';
import { defineConfig } from 'oxlint';

export default defineConfig({
    extends: [core],
    ignorePatterns: ['dist/**/*'],
    rules: { 'import/extensions': 'off' },
    settings: { typeAware: true, typeCheck: true }
});
