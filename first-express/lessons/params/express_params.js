// importing our express dependency to
// 1. start a local server
// 2. create our routes for our application
// 3. communicate with front end client (the browser)
const express = require('express');

//storing the express() function in a variable, this is convention
const app = express();

//the param is represented by the ":name" in this route
//the param is represented in the route by <param> here --> http://localhost:3000/hello/<param>
//the <param> comes out as "req.params.name" within the callback below
//you can use the param as part of your logic
//call this route using postman and see what ends up in the response and the terminal/bash console
app.get("/hello/:name", function(req,res){
	//logging the name param
	console.log(req.params.name)
	//storing the name param in a variable
	const name = req.params.name;
	//logging that this route/request was hit
	console.log(`got request for "/hello/${name}"`)
	//sending this message back to the client
	res.send(`welcome to express ${name}`)
});

//the param is represented by the ":id" in this route
//the param is represented by <param> here --> http://localhost:3000/goodbye/<param>
//the <param> comes out as req.params.id within the callback below
//you can use the param as part of your logic
//call this route using postman and see what ends up in the response and the terminal/bash console
app.get("/goodbye/:id", function(req,res){
	//logging the id param
	console.log(req.params.id);
	//storing the id param in variable
	const id = req.params.id;
	//logging that this route/request was hit
	console.log(`got request for "/goodbye/${id}"`)
	//sending this message back to the client
	res.send(`welcome to express id #${id}`)
});

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
