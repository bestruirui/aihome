import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      // 变体样式、共享 store 与组件同文件导出是既有约定，这些导出不参与 Fast Refresh 组件替换。
      'react-refresh/only-export-components': ['error', {
        allowExportNames: [
          'badgeVariants',
          'buttonVariants',
          'tabsListVariants',
          'useMorphingDialog',
          'usePageActionsStore',
          'useRuntimeClock',
          'useTheme',
        ],
      }],
    },
  },
]);
