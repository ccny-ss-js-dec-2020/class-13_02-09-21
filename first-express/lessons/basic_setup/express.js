/* Basic Express Set Up */

// importing our express dependency to
// 1. start a local server
// 2. create our routes for our application
// 3. communicate with front end client (the browser)
const express = require('express');

//storing the express() function in a variable, this is convention
const app = express();

/*
	Creating a 'get' route here using 'app.get'.
	A 'get' route is the 'read' of CRUD.

	After the 'app.get' is where you put the route.
	In this case, the route is "/"

	Then, you put the callback "function(req,res){ }"
	'req' holds information about the "request" that you're sending

	'res' is how you're responding, or your 'response' to the 'request'
	The action that is taken when the "/" route is hitt

	When this application is running on our server (http://localhost:3000),
	and this route is hit (http://localhost:3000/),
	whatever is inside of the callback "function(req,res){ <here> }"
	will be executed.
	In here, we are logging "got request for home route"
	And sending information over to the client (browser) using 'res.send'...
	...the information we are sending, a simple string ('Welcome to express home').
	try it in postman (watch the video in this directory to see how to use postman)
*/
app.get("/", function(req,res){
	console.log("got request for home route");
	res.send('Welcome to express home')
});

/*
	Creating a 'get' route here using 'app.get'.
	A 'get' route is the 'read' of CRUD.

	After the 'app.get' is where you put the route.
	In this case, the route is "/hello/world"

	Then, you put the callback "function(req,res){ }"
	'req' holds information about the "request" that you're sending
	'res' is how you're responding, or your 'response' to the 'request'

	When this application is running on our server (http://localhost:3000),
	and this route is hit (http://localhost:3000/hello/world),
	whatever is inside of the callback "function(req,res){ <here> }"
	will be executed.
	In here, we are logging "got request for \"/hello/world\"", (escaping the double quotes using \)
	And sending information over to the client (browser) using 'res.send'...
	...the information we are sending, a simple string ('hello there you. welcome to express').
	try it in postman (watch the video in this directory to see how to use postman)
*/
app.get("/hello/world", function(req,res){
	console.log("got request for \"/hello/world\"");
	res.send('hello there you. welcome to express')
});

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
