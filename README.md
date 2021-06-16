# Blog

A sample application showcasing the use of a Ruby on Rails backend paired with a React/NextJS frontend.

![articles page](https://user-images.githubusercontent.com/11819124/121908300-c9050c00-cd24-11eb-9c25-97bd257b3801.png)

Further screenshots can be found [here](./docs/screenshots.md)

## Notable libraries/features

- [NextJS](https://nextjs.org) used as a React framework for the front end
- [TailwindCSS](https://tailwindcss.com) used for styling
- [Rubocop](https://github.com/rubocop/rubocop) used for linting the rails application
- [Prettier](https://prettier.io) used for formatting front end code
- [Commitlint](https://github.com/conventional-changelog/commitlint) used for ensuring commits follow a sensible format
- [Husky](https://typicode.github.io/husky/) used to set up pre-commit/commit-msg git hooks for running linting before commits
- [Framer-motion](framer.com/motion/) used for animations on the front end
- [Faker](https://github.com/faker-ruby) used for generating random data to seed the rails database

## Quickstart

After you've made sure you've met all the [prerequisites](./docs/prerequisites.md) you'll need to run the following commands to get set up:

```sh
# install gems and run database migrations
$ yarn backend:prepare

# (optional) seed the database with fake data
$ yarn backend:seed

# install front end dependencies
$ yarn frontend:prepare

# start the backend rails server
$ yarn backend:dev

# start the frontend nextjs server
$ yarn frontend:dev
```

A full list of scripts can be found [here](./docs/scripts.md)

## Tips

For debugging HTTP requests on the Rails backend, you can use the [httpie](https://httpie.io) package and run commands like `http :8000/articles` or `http PUT :8000/articles/1 title=Test Article` as an alternative to the embedded ruby environment.
