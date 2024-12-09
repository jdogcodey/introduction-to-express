const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRoutes");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

app.use(express.static(assetsPath));
app.get("/about", (req, res) => {
  res.render("about");
});
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
