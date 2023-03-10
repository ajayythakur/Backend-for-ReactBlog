const express=require("express");
const bollyApi=require("../Api/bollywood");

const bollywood = express.Router();
bollywood.route("/bollywood").get(bollyApi.apiController);

module.exports = bollywood;