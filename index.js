const express = require('express');
const auth = require('http-auth');

require('dotenv').config();

const _username = process.env.CUSTOM_USER_NAME || process.env.USER_NAME;
const _password = process.env.CUSTOM_USER_PASSW || process.env.USER_PASSW;

const basic = auth.basic({
        realm: "Private Area"
    }, (username, password, callback) => {
        callback(username === _username && password === _password);
    }
);

basic.on('fail', (result, req) => {
  console.log(`User authentication failed: ${result.user}`);
});

basic.on('error', (error, req) => {
  console.log(`Authentication error: ${error.code + " - " + error.message}`);
});

const PORT = process.env.PORT || 5000;
 
express()
  .use(auth.connect(basic))
  .get('/', (req, res) => res.send(`Hello from express - ${req.user}!`))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));