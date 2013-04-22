var remoteip = require('remoteip');

exports.index = function(req, res) {
  res.render('index', { ip: remoteip.get(req) });
};
