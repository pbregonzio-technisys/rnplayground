module.exports = {
  '*.+(js|jsx|ts|tsx)': [
    'yarn lint --cache --fix',
    'yarn pretty-quick --staged',
  ],
};
