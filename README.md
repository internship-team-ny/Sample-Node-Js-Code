# Sample back-end code with Node js using the express module.
  Does not utilize webpack which requires a lot more set up to use because webpack runs its own server to serve the html files which ignores any routing you write in your own server file with express. Can run the server with either of the following lines in command line. (make sure you are in the root directory of the project)

#### npm start
#### node server.js
####

## FILES

**server.js** - Contains the node js code that routes the various urls and sets up keys and passwords to use NLU API using .env file.

**package.json** - Sets up some of the dependencies used by node and tells npm what to run when running the 'npm start' command.

**.env** - Where the API keys/credentials can be placed so that they can be hidden as environment variables. Shouldn't be included in git respository because it contains the credientials and keys, so it is in the .gitignore.

**js/config.js** - CDN links for react, react-dom, and other javascript sources that may or may not be needed.

**html/\*.html files** - Include a bunch of CSS sources and some javascript sources, then use the 'require' function to import the config.js and to then import the .js file to then render the components on the page with React JS.
