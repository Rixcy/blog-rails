# Scripts

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
