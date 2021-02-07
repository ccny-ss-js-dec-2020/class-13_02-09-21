/*
  To start, we will be using 'postman' as our client in order to hit our api routes.
  We will be using our browser as our client soon.
*/

/*
  To see how to use postman with 'put' requests, view the video
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
  PUT REQUEST to get updated user's info from the client side to the server side
  Using express, the syntax for a "put" is using "app.put", like below
*/
app.put('/user/info', function(req, res){
  // The data sent from the client is caught on the server side in express using 'req.body'
  // we will be using postman as our client that will send the mock new user info here
  console.log(req.body)

  let currentUserInfo = {
    name: "jaed",
    username: "jarthom"
  }

  // re-assiging the value of currentUserInfo.name to the 'name' value sent by the client
  currentUserInfo.name = req.body.name;

  // sending a response to the user/client that we received a successful request from the user
  // as part of this response, i'm sending the updated user value back to the client alone with a message
  res.json({success: true, user: currentUserInfo, message: "User Updated"})
})

/*
  PUT REQUEST to get updated user's info from the client side to the server side
  Using express, the syntax for a "put" is using "app.put", like below
*/
app.put('/animals', function(req, res){
  // The data sent from the client is caught on the server side in express using 'req.body'
  // we will be using postman as our client that will send the mock new user info here
  console.log(req.body)

  // setting success to false, and will update it if the request is processed correctly
  let success = false;

  // mocking animal's info
  const animals = [
    {
      name: "pyjama shark",
      type: "fish"
    },
    {
      name: "octopus",
      type: "fish"
    },
    {
      name: "humpback whale",
      type: "mammal"
    }
  ]

  /*
    looping through the animals array
    If the 'name' property value that comes from the client matches a 'name' property value in the animals array,
    then update that animal's type to the value of the 'type' property from the req.body
    and re-assign the value of success to true
  */
  animals.forEach((animal) => {
    if(animal.name === req.body.name){
      animal.type = req.body.type
      success = true;
    }
  })

  // setting response to undefined and will re-assign the value below
  let response;
  if(success){
    /*
      if success is equal to true, meaning an update was made
      then set the response variable to be this object, which includes the updated animals array
    */
    response = {success: true, animals: animals, message: "Animal Updated"}
  } else {
    /*
      if success is equal to false, meaning no update was made
      then set the response variable to be this object
    */
    response = {success: false, message: "Animal not updated"}
  }

  // sending information to the client on whether the update was successful or not
  // using the value from the 'response' variable that we set right above
  res.json(response)
})

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
