const express=require("express");
const homeApi=require("../Api/home");

const home=express.Router();
home.route("/home").get(homeApi.apiController);

module.exports=home;