import { createConfigForNuxt } from '@nuxt/eslint-config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default createConfigForNuxt({}, { rules: { 'vue/multi-word-component-names': 'off' } })
  .append({
    plugins: { 'unused-imports': eslintPluginUnusedImports },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  })
  .append(eslintPluginPrettierRecommended);
