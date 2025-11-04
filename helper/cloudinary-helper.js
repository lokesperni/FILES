var cloudinary = require("../config/cloudinary")

var uploadToCloudinary = async(filepath)=>{
  try{
    var result = await cloudinary.uploader.upload(filepath)
    return {
      url : result.secure_url,
      publicId : result.public_id
    }
  }catch(error){
    console.log("error",error);
    res.status(401).json({message : "error"})
  }
}

module.exports = uploadToCloudinary 