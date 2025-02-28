const express = require("express");
const app = express();

const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter.js');
const ProductRouter = require('./Routes/ProductRouter.js');

require('dotenv').config();
require("./Models/db.js");
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is listing at ${PORT}`);

})
app.get("/",(req,res)=>{
    res.send("Yes dude");
});

// app.get("/product",(req,res)=>{
//     res.send("Hello!");
// });

//Auth 
app.use("/auth",AuthRouter);
app.use("/product",ProductRouter);