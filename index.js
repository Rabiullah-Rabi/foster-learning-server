const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const corurseCategories = require('./data/courseCat/courseCat.json');
const courses = require('./data/courseDetails/courseDetails.json');
app.get("/", (req, res) => {
  res.send("api running");
});
app.get("/category", (req, res) => {
    res.send(corurseCategories);
});
app.get("/category/:id",(req, res) => {
    const id = req.params.id;
    const selectedCategory = courses.filter((category) => category.catID === id);
    res.send(selectedCategory);
  });
app.get("/courses", (req, res) => {
    res.send(courses);
});
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find((course) => course.id === id);
    res.send(selectedCourses);
  });
app.listen(port, () => {
  console.log("port is ", port);
});

module.exports = app;