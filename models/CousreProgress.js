const mongoose =require("mongoose");

const CourseProgressSchema = new mongoose.Schema({
  courseID:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"course",
  },
  compleatedVideos:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Subsection",
  }
});
module.exports =mongoose.model("CourseProgress", CourseProgressSchema)