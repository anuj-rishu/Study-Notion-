const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
    type: String ,
    required: true,
    trim: true,
   },
   lastName:{
   type:string,
   required:true,
   trim:true,
   },
email:{ 
    type:String,
    required:true,
    trim: true,
},
password:{
    type:String,
    required: true,
    trim:true,
}
});