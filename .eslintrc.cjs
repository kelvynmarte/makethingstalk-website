module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": [ 2, "tab", { "SwitchCase": 1 } ],        
    "semi": [ 2, "always" ],        
    "keyword-spacing": [ 2, { "before": true, "after": true } ],        
    "space-before-blocks": [ 2, "always" ],        
    "no-mixed-spaces-and-tabs": [ 2, "smart-tabs" ],        
    "no-cond-assign": 0,        
    "no-unused-vars": 2,        
    "object-shorthand":  [ 2, "always" ],        
    "no-const-assign": 2,        
    "no-class-assign": 2,        
    "no-this-before-super": 2,        
    "no-var": 2,        
    "no-unreachable": 2,        
    "valid-typeof": 2,        
    "quote-props": [ 2, "as-needed" ],        
    "one-var": [ 2, "never" ],        
    "prefer-arrow-callback": 2,        
    "prefer-const": [ 2, { "destructuring": "all" } ],          
    "arrow-spacing": 2  
  },
}
