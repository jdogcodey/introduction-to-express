const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRoutes");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
