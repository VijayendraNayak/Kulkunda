const mongoose=require("mongoose")
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const connectToDatabase=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to mongodb database")
    })
}

module.exports=connectToDatabase;