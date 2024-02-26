const express = require("express");
const app = express();
const cors = require( "cors" );
const translateText = require("./controllers/text.controller");

app.use(express.json());
app.use(cors());


app.post("/",translateText)


app.use((req, res, next)=> {
    res.status(404).json({ error: "Not Found or Incorrect Path" });
  });

app.use((err, req, res, next) =>{
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error"});
});


module.exports = app;
