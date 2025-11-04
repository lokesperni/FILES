var image = require("../model/image")

var uploadToCloudinary = require("../helper/cloudinary-helper")

var uploadImage = async(req,res)=>{
    if(!req.file){
        res.status(401).json({message : "file missing"})
    }
    var {url,publicId} = await uploadToCloudinary(req.file.path)
    var newImage = new image({
        url,
        publicId
    })

    await newImage.save()
    res.status(201).json({message : "image added"})
}

var getAllImages = async(req,res)=>{
    var allImages = await image.find()
    res.status(200).json(allImages)
}

var getSingleImage = async(req,res)=>{
    var id = req.params.id 
    var singleImage = await image.findById(id)
    res.status(200).json(singleImage)
}

module.exports = {uploadImage,getAllImages,getSingleImage} 