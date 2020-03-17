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

var mountPath = process.env.PARSE_MOUNT || "/parse"
app.use(mountPath, api)

var port = process.env.PORT || 1337
var httpServer = require("http").createServer(app)

httpServer.listen(port, function () {
  console.log(process.title + " running on port " + port + ".")
})
