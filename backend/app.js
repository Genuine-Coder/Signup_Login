const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is listing at ${PORT}`);

})
app.get("/",(req,res)=>{
    res.send("Yes dude");
});