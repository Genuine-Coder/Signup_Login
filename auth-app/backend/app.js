const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require("./Models/db.js");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is listing at ${PORT}`);

})
app.get("/",(req,res)=>{
    res.send("Yes dude");
});
app.get("/hey",(req,res)=>{
    res.send("Hello!");
});