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
  DELETE REQUEST that receives id from route param and then proceeds to delete
  Using express, the syntax for a "delete" is using "app.delete", like below
*/
app.delete('/user/:id', function(req, res){
  // mocking users
  const users = [
    {
      "id": 1,
      "name": "bo",
      "username": "oak34"
    },
    {
      "id": 2,
      "name": "patrick",
      "username": "kc10"
    },
    {
      "id": 3,
      "name": "tom",
      "username": "tb12"
    }
  ]

  let userExists = false

  /*
    Looping through the users array
    If the id in the route params exists, then remove that record from the array using splice
  */
  users.forEach((user, index) => {
    // using '==' here because req.params.id might be a string and the types might not match
    if(user.id == req.params.id){
      // the 'id' param exists in the users array, so setting the value of the variable to true
      userExists = true;
      users.splice(index, 1);
    }
  });

  let response;
  if(userExists){
    // the 'id' param does exist in the users array, so set up this response to send to the client/user
    // we are included the updated users array as the response to the client to show the client that the user was successfully removed from the array
    response = {success: true, users: users, message: "Deletion Successful"}
  } else {
    // the 'id' param does not exist in the users array, then set up this response to send to the client/user
    response = {success: false, message: "Deletion Unsuccessful. User does not exist."}
  }

  // sending the response from the request back to the client
  res.json(response)
})

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
