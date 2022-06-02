module.exports = {
  extends: ['alloy', 'alloy/typescript', 'alloy/react'],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  plugins: ['import'],
  rules: {
    // 自定义您的规则
    // Customize your rules
    semi: ['error', 'always'],
    'no-tabs': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2
  }
};
