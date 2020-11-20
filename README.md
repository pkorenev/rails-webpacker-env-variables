# setup for env-variables with foreman
* `$ gem install foreman`
* create .env file in project root and add it to .gitignore
* create .env.example file in project root
* create Procfile in project root
* run project: `$ foreman start`

# setup node for env-variables
* `$ yarn add dotenv`
* add config/webpack/dotenv.js
* update config/webpack/environment.js
* `$ rails s`
* `$ bin/webpack-dev-server`