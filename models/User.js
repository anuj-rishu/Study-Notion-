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
    
},
accountType:{
    type: String,
    enum:["Admin" ,"Student", "Instructor"],
},
additionalDetails:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
},
courses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
}
],
image:[
    {
        type: String,
        ref:"CourseProgress",
    }
]

});
module.exports =mongoose.model("User", userSchema)