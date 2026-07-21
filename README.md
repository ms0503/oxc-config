# ms0503's oxc config

This package contains configurations of oxc toolchain such as oxfmt and oxlint.

## Installation

```shell
# For npm / yarn v1
npx jsr add -D @ms0503/oxc-config
# For yarn v2+
yarn dlx jsr add -D @ms0503/oxc-config
# For yarn v4.9+
yarn add -D jsr:@ms0503/oxc-config
# For pnpm
pnpx jsr add -D @ms0503/oxc-config
# For pnpm v10.9+
pnpm add -D jsr:@ms0503/oxc-config
# For Deno
deno add -D jsr:@ms0503/oxc-config
# For Bun
bunx jsr add -D @ms0503/oxc-config
```

## Examples

### oxfmt

```ts
// oxfmt.config.ts

import { config } from '@ms0503/oxc-config/fmt';
import { defineConfig } from 'oxfmt';

// Basic usage
export default defineConfig(config);

/*

// With customize
export default defineConfig({
    ...config,
    // custom options here
});

*/
```

### oxlint

```ts
// oxlint.config.ts

import {
    core,
    hono,
    honox,
    jsx,
    nextjs,
    react,
    reactRouter,
    vue
} from '@ms0503/oxc-config/lint';
import { convertGlobals } from '@ms0503/oxc-config/utils';
import globals from 'globals';
import { defineConfig } from 'oxlint';

export default defineConfig({
    extends: [
        // Minimal config
        core

        /*

        // Minimal config with JSX
        core, jsx,

        // Framework config for Hono
        hono,

        // Framework config for React
        react,

        // Framework config for Vue
        vue,

        // Full-stack framework config for HonoX
        honox,

        // Full-stack framework config for Next.js
        nextjs,

        // Full-stack framework config for React Router (v7+)
        reactRouter

        */
    ],
    ignorePatterns: [],
    options: { typeAeare: true, typeCheck: true },
    overrides: [
        {
            files: ['src/**/*.ts'],
            // Global variable definitions in 'globals' is not compatible with oxlint.
            // 'convertGlobals' converts to oxlint-compatible shape.
            globals: convertGlobals({
                ...globals.browser,
                ...globals.builtin,
                ...globals.es2026
            })
        }
    ]
});
```
