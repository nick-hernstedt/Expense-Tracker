var path = require("path");

module.exports = function (app) {
  ajpp.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
