const mongoose = require("mongoose");
require("dotenv").config();

exports.connect=()=>{
mongoose.connect(process.env.MONGODB_URL,{

})
then(()=> console.log("Db connection succesfully"))
.catch((error)=>{
    console.log("Db connection failed")
    console.log(error)
    process.exit(1)
})
}
