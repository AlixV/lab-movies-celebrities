// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-movies-celebrities';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;


// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

//and remember to link these two new files to either app.js 
//or routes/index.js so your server has access to them.

// Add by Alix :
const celebritiesRouter = require('./routes/celebrities.routes');
app.use('/', celebritiesRouter)

// Add by Alix :
const moviesRouter = require('./routes/movies.routes');
app.use('/', moviesRouter)



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
