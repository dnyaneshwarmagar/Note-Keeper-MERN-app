const mongoose = require("mongoose");
const connectDB = async ()=>{
    try{
        return  await mongoose.connect(process.env.MONGO_URL)
    }catch(err){
        console.log(err.message)
    }
}

module.exports = connectDB