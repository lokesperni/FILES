var mongoose = require("mongoose")

async function connectdToDatabase(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the data base");
    }catch(error){
        console.log("error",error);
    }
}
module.exports = connectdToDatabase 