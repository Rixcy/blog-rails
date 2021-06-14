# Prerequisites

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
