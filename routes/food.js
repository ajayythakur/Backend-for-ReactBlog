const express= require('express')
const foodApi=require('../Api/food');

const food=express.Router();
food.route("/food").get(foodApi.apiController);

module.exports=food;
