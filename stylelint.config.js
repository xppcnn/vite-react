module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'rule-empty-line-before': ['never']
  }
};
