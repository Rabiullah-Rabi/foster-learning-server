const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const corurseCategories = require('./data/courseCat/courseCat.json');
const course = require('./data/courseDetails/courseDetails.json');
app.get("/", (req, res) => {
  res.send("api running");
});
app.get("/category", (req, res) => {
    res.send(corurseCategories);
});
app.get("/course", (req, res) => {
    res.send(course);
});

app.listen(port, () => {
  console.log("port is ", port);
});
