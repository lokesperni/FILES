var image = require("../model/image")

var uploadToCloudinary = require("../helper/cloudinary-helper")

var uploadImage = async(req,res)=>{
  try{
    if(!req.file){
      return res.status(401).json({message : "file missing"})
    }
    var {url,publicId} = await uploadToCloudinary(req.file.path)
    var newImage = new image({
      url,
      publicId
    })
    await newImage.save()
    res.status(201).json({message : "new image added"})
  }catch(error){
    console.log("error",error);
    res.status(401).json({message : "error"})
  }
}
module.exports = uploadImage 