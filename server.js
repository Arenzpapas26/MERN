const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//App config

const app = express();

//Middlewares

app.use(express.json());
app.use(cors());
//DB Config

const db = require("./config/keys").mongoURI;

//DB Connection

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connected successfully!");
});

//routes
app.get("/", (req, res) => {
  res.status(200).json("HELLO PROGRAMMER");
});
app.use("/api/items", require("./routers/api/Items"));

//port

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
