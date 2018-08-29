# node-heroku-http-auth
A demo setup for Heroku app with HTTP Auth

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup

### Heroku

Click on "Deploy to Heroku" button above and follow the instructions:
* Enter an application name
* Choose a region
* Update config vars or leave default values

#### Creating an app without a name

*The app name argument is optional. If no app name is specified, a random name will be generated.
Since Heroku app names are in a global namespace, you can expect that common names, like “blog” or “wiki”, will already be taken. It’s often easier to start with a default name and rename the app later.*

#### Customize username/password after deployment

Go to Heroku application then click on *Settings* and then click on "*Reveal Config Vars*" button.

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
