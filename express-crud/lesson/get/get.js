/*
  To start, we will be using 'postman' as our client in order to hit our api routes.
  We will be using our browser as our client soon.
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
  GET REQUEST to send user's info from the server side to the client side
  Using express, the syntax for a "get" is using "app.get", like below
*/
app.get('/user/info', function(req, res){
  // mocking user's info
  const userInfo = {
    name: "Joe Smith",
    username: "yeti88",
    email: "heyjoe@hendrix.com"
  }

  // sending user's info to the client
  res.json(userInfo)
})

/*
  GET REQUEST to send all animal information from the server side to the client side
  Using express, the syntax for a "get" is using "app.get", like below
*/
app.get('/animals', function(req, res){
  // mocking animal's info
  const animals = [
    {
      name: "pyjama shark",
      type: "fish"
    },
    {
      name: "octopus",
      type: "invertebrate"
    },
    {
      name: "humpback whale",
      type: "mammal"
    }
  ]

  // sending user's info to the client
  res.json(animals)
})

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
