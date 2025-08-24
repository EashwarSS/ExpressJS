import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

// Step1: npm init -y
// Step2: npm i express
// Step3: node index.js
// Step4: netstat -ano | findstr "LISTENING"