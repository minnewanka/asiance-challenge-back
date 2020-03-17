var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  appId: process.env.APP_ID || 'ASIANCE-CC',
  masterKey: process.env.MASTER_KEY || '*acgXcT8TKAnKtf_',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
});

app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});
