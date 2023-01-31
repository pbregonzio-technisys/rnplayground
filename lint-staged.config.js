module.exports = {
  '*.+(js|jsx|ts|tsx|json)': [
    'yarn lint --cache --fix',
    'yarn pretty-quick --staged',
  ],
};
