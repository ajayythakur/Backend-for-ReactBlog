const express=require("express");
const fitApi= require("../Api/fitness");

const fitness=express.Router();
fitness.route("/fitness").get(fitApi.apiController);

module.exports=fitness;