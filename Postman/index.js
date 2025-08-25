import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/eashwar", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/eashwar", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/eashwar", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// Step1: npm install
// Step2: nodemon index.js
// Step3: Open Postman, enter URL localhost:3000/register, click on body --> xxx-www-form-urlencoded and Key --> name; value --> eashwar
// Step4: Apply POST, PUT, Delete (localhost:3000/user/eashwar)