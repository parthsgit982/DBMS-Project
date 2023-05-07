const express = require("express");
require("dotenv").config();
const path = require("path");
const DB = require("./DB/DB-config");
const cookie = require('cookie-parser');


const auth_router = require("./routes/auth_routes.js");
const page_router = require("./routes/pages_routes");
const router_in_1 = require("./routes/router_in_1");
const router_in_2 = require("./routes/router_in_2");

const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookie());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", page_router);
app.use("/api", auth_router);

app.use("/api_1",router_in_1);
app.use("/api_2",router_in_2);


const PORT = process.env.PORT || 3000;
DB.connect((err) => {
  if (err) console.log(err);
  console.log("DB " + DB.state);
  app.listen(
    PORT,
    console.log(
      `Listening on Port ${PORT}\nRunning Server => \x1b[36mhttp://localhost:${PORT}\x1b[0m`
    )
  );
});
