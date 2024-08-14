const mongoose =require("mongoose");

const CourseSchema = new mongoose.Schema({
  
    courseName:{
        type:String,
    },
    CourseDescription:{
        type:String,
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    whatYouWillLearn:{
        type: mongoose.Schema.Types.ObjectId,
        type:"String",

    },
    courseContent:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Scetion",
        }
    ],
    ratingAndReviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReviews"
        
    }],
price:{
    type:Number,
},
thumbnail:{
    type:String,
},
tag:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Tag",
},
studentEnrolled:[{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User",
}]



});
module.exports =mongoose.model("Course", CourseSchema)