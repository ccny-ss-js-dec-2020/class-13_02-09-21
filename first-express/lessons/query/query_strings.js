// importing our express dependency to
// 1. start a local server
// 2. create our routes for our application
// 3. communicate with front end client (the browser)
const express = require('express');

//storing the express() function in a variable, this is convention
const app = express();

//when your server is running by doing 'node query_strings.js' or 'nodemon query_strings.js' in the terminal
//type in http://localhost:3000/page?name=<your name>&age=<your age>
//whatever you type after page is going to be represented in the request through req.query,
//name will be "req.query.name" & age will be "req.query.age"
app.get("/page", function(req,res){
	//logging the query values, which come in an object
	console.log(req.query)
	//sending the query values back to the client
	//im using 'res.json' instead of 'res.send' here because i want to send a json object back to the client
	res.json(req.query)
});

//telling your server to listen on this port, meaning your application will run on this port
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
