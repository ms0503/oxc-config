import { core } from './dist/lint/index.js';
import { defineConfig } from 'oxlint';

export default defineConfig({
    extends: [core],
    ignorePatterns: ['.yarn/**/*', 'dist/**/*'],
    rules: { 'import/extensions': 'off' }
});
