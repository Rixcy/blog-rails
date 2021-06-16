# Deployment

[Heroku](https://www.heroku.com) is used to deploy the production rails app. [Vercel](https://vercel.com) is used to deploy the frontend app.

To push changes to heroku, since the backend lives in a subdirectory, you need to run:

```sh
$ git subtree push --prefix backend heroku master
```
