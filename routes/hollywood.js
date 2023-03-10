const express=require("express");
const hollyApi=require("../Api/hollywood");

const hollywood=express.Router();

hollywood.route("/hollywood").get(hollyApi.apiController);

module.exports=hollywood;