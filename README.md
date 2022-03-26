# API Project

In this project I was focused on constructing my own back end. The sections of the back end which I focused on was constructing a database, constructing my APIs from scratch, and authenticating my APIs so one would need a JSON web token to make API calls.

## Database

My database was built using Mongoose. The way I constructed it is by creating models in the server/db/model folder. In the server/db/seed.js file is where I seeded my database.

## APIs

The way I build out my API's was in the server/api/index.js folder where I build out my app server. After building the app server, I had to modularize my routes for each model, all of this progress was stored in the server/api/routes folder.

## Authentication

I also had it where if one wanted to make a request they would need a JSON API web token. The only requests that can be done without a JSON web token are post requests to the following routes: "/api/user" and "/auth".
