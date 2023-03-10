const express=require("express");
// const { apiController } = require("../Api/bollywood");
const techApi=require("../Api/technology");

const technology=express.Router();

technology.route("/technology").get(techApi.apiController);

module.exports=technology;