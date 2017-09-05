module.exports = function (env) {
  return require(`./config/webpack/webpack.${env}.js`);
};
