# node-heroku-http-auth
A demo setup for Heroku app with HTTP Auth

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup

### Heroku

Click on above button "Deploy" and follow the instructions

#### Configure username/password

Go to Heroku application then click on *Settings* and add new Config Vars *USER_NAME* and *USER_PASSW*.

### Local environment

1) Install Javascript dependencies (via yarn or npm)

2) Create .env file with *USER_NAME* and *USER_PASSW*, e.g.
```
USER_NAME=admin
USER_PASSW=admin
```

3) Start the application

## Resources

https://www.npmjs.com/package/http-auth

https://www.npmjs.com/package/dotenv

https://github.com/heroku/node-js-getting-started

https://devcenter.heroku.com/articles/getting-started-with-nodejs
