import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Eashwar</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +919550297207</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//Step1: npm init -y
//Step2: npm i express
//Step3: npm i -g nodemon
//Step4: nodemon indexjs