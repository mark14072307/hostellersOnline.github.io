const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const { Console } = require("console");
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser'); // middleware
const { body } = require("express-validator");
app.use(bodyParser.urlencoded({ extended: false }));
require("./src/db/mongo")
const CD = require("./src/models/room")
const Student = require("./src/models/user");

app.use(express.json())

const tempPath = path.join(__dirname, "Templates/views");
const partialsPath = path.join(__dirname, "Templates/partials");
app.use(express.static(path.join(__dirname, "Templates/asset")));
app.use('/asset', express.static(path.join(__dirname, "Templates/asset")))
app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
res.render("index", {
ActiveHome: "font-size: 18px; text-shadow: 2px 2px #410361;"
})
});

app.get("/about", (req, res) => {
res.render("about", {
ActiveAbout: "font-size: 18px; text-shadow: 2px 2px #410361;"
});
});

app.get("/services", (req, res) => {
res.render("services", {
ActiveServices: "font-size: 18px; text-shadow: 2px 2px #410361;"
})
});

app.get("/login", (req, res) => {
res.render("login", {
ActiveLogin: "font-size: 18px; text-shadow: 2px 2px #410361;"
})
});

app.get("/signup", (req, res) => {
res.render("signup", {
ActiveSignup: "font-size: 18px; text-shadow: 2px 2px #410361;"
})
});

app.get("/mess", (req, res) => {
res.render("mess")
});

app.get("/room", (req, res) => {
res.render("room");
});

app.get('*', (req, res) => {
res.render("error")
});

app.post('/users', async (req, res) => {
try {
const user = new Student(req.body)
const createUser = await user.save();
res.render("signupsuccess").send(createUser);

} catch (e) {
res.render("signup", {
invalid: e,
email: req.body.Email,
ActiveSignup: "font-size: 18px; text-shadow: 2px 2px #410361;"
})
}
});













  app.listen(port, () => {
  console.log("Server is up on port " + port)
  });