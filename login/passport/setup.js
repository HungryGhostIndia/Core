var localAuthSetup = require("./passport-local").setup;

exports.setup = function () {
  localAuthSetup();
};