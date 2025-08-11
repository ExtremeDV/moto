// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tailwind from 'eslint-plugin-tailwindcss'

export default withNuxt({
  features: {
    stylistic: true,  // Включаем стилистику: indent 2, single quotes, no semi (можно кастомизировать ниже)
  },
  rules: {
    // Рекомендованные правила из eslint:recommended (Possible Problems)
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',  // Это из removed, но иногда добавляют для compat
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': 'error',
    'no-useless-backreference': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',  // Добавил, так как в recommended

    // Рекомендованные из Suggestions
    'no-delete-var': 'error',
    'no-global-assign': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-unused-labels': 'error',

    // Кастомные стилистические правила (переопределяем defaults, если нужно)
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],  // Trailing commas для git diffs

    // Твои custom правила (переопределяют recommended)
    'no-console': 'off',
    'nuxt/no-cjs-in-config': 'off',

    // Другие полезные для Nuxt3/Tailwind (можно отключить, если не нужно)
    'vue/multi-word-component-names': 'off',  // Часто отключают в Nuxt
    'vue/no-v-html': 'off',  // Если используешь v-html
  }
}).append(...tailwind.configs['flat/recommended'])