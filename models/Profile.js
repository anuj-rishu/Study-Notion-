const mongoose =require("mongoose");

const profileSchema = new mongoose.Schema({
 gender: {
type:String,
 },
 dateofBirth:{
    type:String,
 },
 about:{
    type:String,
    trim:true,

 },
 conatctNumber:{
    type:Number,
    type:true,

 }

});
module.exports =mongoose.model("Profile", profileSchema)