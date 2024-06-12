require('dotenv').config();
const express = require("express");
const os = require('os');

const app = express ();
app.use(express.json());

app.get("/", (request, response) => {
  response.send({
    message: "Here's your response from the node.js",
  });
});

app.get("/status", (request, response) => {
   const status = {
      "Status": "Running"
   };
   response.send(status);
});

app.get("/hostname", (request, response) => {
   const hostname = {
      "hostname": (os.hostname())
   };
   response.send(hostname);
});

app.get("/author", (request, response) => {
   const author = {
      "author": (process.env.AUTHOR)
   };
   response.send(author);
});

app.get("/uuid", (request, response) => {
   const uuid = {
      "uuid": (process.env.UUID)
   };
   response.send(uuid);
});

app.listen(8000, () => {
  console.log("Server Listening on PORT 8000");
});
