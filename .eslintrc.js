/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable no-dupe-keys */
/* eslint-disable quotes */
module.exports = {
  root: false,
  env: {
    browser: true,
    "jest/globals": true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: ["jest"],
  // add your custom rules here
  rules: {
    "no-trailing-spaces": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "space-before-function-paren": "off",
    allowTemplateLiterals: "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/html-self-closing": "off",
    "no-multiple-empty-lines": [2, { max: 99999, maxEOF: 0 }],
  },
};
