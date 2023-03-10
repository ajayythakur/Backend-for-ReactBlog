const express = require("express");
const bollywood = require("./routes/bollywood");
const technology = require("./routes/technology");
const fitness = require("./routes/fitness");
const food = require("./routes/food")
const hollywood =require("./routes/hollywood");
const home=require("./routes/home");
const app = express();

const cors=require("cors");


app.use(cors());

app.use("/",home);
app.use("/",bollywood);
app.use("/",technology);
app.use("/",fitness);
app.use("/",food);
app.use("/",hollywood);

app.listen(process.env.PORT||3002,()=>{
    console.log("App is running on port 3002..");

})