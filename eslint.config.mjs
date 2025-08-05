// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    extends: [
      'plugin:nuxt/recommended'
    ],
    rules: {
      // Add your custom rules here
      'no-console': 'off',
      'nuxt/no-cjs-in-config': 'off'
    }
  }
)
