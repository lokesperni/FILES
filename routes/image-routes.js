var express = require("express")

var router = express.Router()

var {uploadImage,getAllImages,getSingleImage} = require("../controllers/image-controller")
const upload = require("../middleware/image-middleware")

router.post("/uploads",upload.single("image"),uploadImage)
router.get("/allimages",getAllImages)
router.get("/singleimage/:id",getSingleImage)

module.exports = router 