/*
  To start, we will be using 'postman' as our client in order to hit our api routes.
  We will be using our browser as our client soon.
*/

/*
  To see how to use postman with 'post' requests, view the video
  You have to set the "Content-Type" in postman "application/json",
  which is your client telling your server that you're sending over json
*/

/* Modules needed for client communication */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/*
  Body Parser is needed in order to parse data/information that is sent as a body from the client
  Body Parser is needed for POSTS, PUTS & DELETES
*/
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

/*
  POST REQUEST to get new user's info from the client side to the server side
  Using express, the syntax for a "post" is using "app.post", like below
*/
app.post('/user/info', function(req, res){
  // The data sent from the client is caught on the server side in express using 'req.body'
  // we will be using postman as our client that will send the mock new user info here
  console.log(req.body)

  // sending a response to the user that we received the request from the user
  res.json({success: true})
})

/*
  POST REQUEST to get new animal info from the client side to the server side
  Using express, the syntax for a "post" is using "app.post", like below
*/
app.post('/animals', function(req, res){
  // The data sent from the client is caught on the server side in express using 'req.body'
  // we will be using postman as our client that will send the mock new user info here
  console.log(req.body)
  const animal = req.body
  let success = false;

  // if there is a 'type' field in the req.body,
  // then change the value of the success variable to true
  if(req.body.type){
    success = true;
  }

  // sending a response to the user using some logic here
  // if there is a 'type' field in the req.body, then telling the user that the request was successful
  // if there is not a 'type' field in the req.body, then telling the user that the request was not successful
  res.json({success: success})
})

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
