module.exports = {
  '*.+(js|jsx|ts|tsx|json|md|mdx)': [
    'yarn lint --cache --fix',
    'yarn pretty-quick --staged',
  ],
};
