const path = require('path');

module.exports = (app) =>
  app.get('/index.html', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
