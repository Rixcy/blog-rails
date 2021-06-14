# Blog

A sample application showcasing the use of a Ruby on Rails backend paired with a React/NextJS frontend.

## Notable libraries/features

-   [TailwindCSS](https://tailwindcss.com) used for styling
-   [Rubocop](https://github.com/rubocop/rubocop) used for linting the rails application
-   [Prettier](https://prettier.io) used for formatting front end code
-   [Commitlint](https://github.com/conventional-changelog/commitlint) used for ensuring commits follow a sensible format
-   [Husky](https://typicode.github.io/husky/) used to set up pre-commit/commit-msg git hooks for running linting before commits
-   [Framer-motion](framer.com/motion/) used for animations on the front end
-   [Faker](https://github.com/faker-ruby) used for generating random data to seed the rails database

## Prerequisites

### Ruby

This project has been developed on top of Ruby 2.6.3. The version can be checked by running `ruby --version`. Optionally you can use a Ruby version manager such as [rvm](https://rvm.io) for setting this up.

### SQLite3

This is used as a backend for the rails application. Instructions for setting this up can be found on [this website](https://www.sqlite.org/index.html) and the version can be verified once installed by running `sqlite3 --version`.

### NodeJS

NodeJS can be installed directly from [their website](https://nodejs.org/en/download/) or alternatively a node version manager such as [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n) can be used.

To verify the version once installed you can run `node --version`. Rails requires this to be at least `8.16.0` but a higher version such as 14 is preferable to support the front end.

### Yarn

Yarn is used as an alternative to NPM and is required by this project for installing packages and running scripts.

Instructions on how to install this can be found on the [yarn website](https://classic.yarnpkg.com/en/docs/install#mac-stable). Once installed you can run `yarn --version` to check the version.

The [only-allow](https://www.npmjs.com/package/only-allow) package is used to ensure this is used when running scripts.

### Rails

You may also need the rails gem installed globally. This can be done by running:

```sh
$ gem install rails
```

And verified using:

```sh
$ rails --version
```

## Running locally

After you've made sure you've met all the [prerequisites](#prerequisites) you'll need to run the following commands to get set up:

1. Prepare the backend environment by running:

```sh
$ yarn backend:prepare
```

1. (optional) Seed the database with fake data by running:

```sh
$ yarn backend:seed
```

1. Prepare the frontend environment by running:

```sh
$ yarn frontend:prepare
```

1. Start the rails server:

```sh
$ yarn backend:dev
```

1. Start the nextjs server:

```sh
$ yarn frontend:dev
```

## Scripts

These scripts are available from the root of the project

-   `backend:dev` - this will boot up the rails server running on port `:8000`
-   `backend:console` - this will open up an embedded ruby console where you can query data or rails methods directly. You can optionally pass the sandbox flag to ensure any modifications don't persist through the session like so: `yarn backend:console --sandbox`
-   `backend:prepare` - this will install backend dependencies by running `bundle install` and run any pending migrations with `rails db:migrate`
-   `backend:seed` - this will seed the database with fake data
-   `backend:test` - this will run the rails test suite
-   `frontend:dev` - this will start up the nextjs server on port `:3000`
-   `frontend:prepare` - this will install any root node dependencies as well as any front end dependencies
-   `frontend:build` - this will build the NextJS application
-   `frontend:serve` - this will build and start a server for the NextJS application

## Tips

For debugging HTTP requests on the Rails backend, you can use the [httpie](https://httpie.io) package and run commands like `http :8000/articles` or `http PUT :8000/articles/1 title=Test Article`
