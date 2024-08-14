const mongoose =require("mongoose");

const tagSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
description:{
    type:String,
},
cousre:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Cousre",
}

});
module.exports =mongoose.model("tag", tagSchema)