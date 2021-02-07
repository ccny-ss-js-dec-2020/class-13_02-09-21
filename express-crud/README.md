# Express CRUD

## GET
* The 'Read' of CRUD
* Meant to gather information (i.e. from database) and send this information to the client (browser). In our case, this will involve retrieving information that we currently have in the database and then sending this information to the client.
* Examples of using a GET:
  * Receiving all of the records from a table in the database and sending all of that information to the client
  * Receiving a user's information using a param (i.e. contact info, profile info) and sending that information to the client
* Does not accept a body (req.body)

## POST
* The 'Create' of CRUD
* Meant to receive new information from the client on the server side and then process that information on the server side. In our case, this is information that will be added (inserted) into the database.
* Examples of using a POST:
  * Any client form that is submitted (i.e. Sign Up form). Any information that is input into a form and then submitted on the client side can be received via a post on the server side. For our sign up form example, the information in the form is sent from the client side to the server side and then added to the 'users' table in your database.
  * Any client side event (button click, checkbox checked) can be sent as a post from the client to the server side with any information you would like to send from the client side to the server side.
* Accepts a body (req.body). Body is Required.

## PUT
* The 'Update' of CRUD
* Meant to receive data from the client on the server side for previously entered information in the database that needs to be UPDATED.
* Examples of using a PUT:
  * Need to update user data, like when you're editing your profile on a social network.
  * Need to updated user's contact information.
* Accepts a body (req.body). Body is not required.

## DELETE
* The 'Delete' of CRUD
* Meant to receive information from the client on the server side for record(s) in the database that need to be DELETED.
* Examples of using a DELETE:
  * Deleting a user from the 'users' table
  * Deleting any record(s) from a database table
* Accepts a body (req.body). Body is not required.
