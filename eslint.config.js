// eslint.config.js
import antfu from "@antfu/eslint-config"

export default antfu({
  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double", // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    "./fixtures",
    // ...globs
  ],
  rules: {
    "no-console": "off", // This disables the rule that flags console.log statements
    // "max-len": ["error", { code: 90, ignoreUrls: true }],
  },
})
