#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

var proxy = require('express-http-proxy');
var app = require('express')();

const key = fs.readFileSync('./api.github.com-key.pem', 'utf8');
const cert = fs.readFileSync('./api.github.com.pem', 'utf8');

app.use('/', proxy('https://api.github.com', { preserveHostHdr: false }));

https.createServer({
  key, cert
}, app).listen(9092)