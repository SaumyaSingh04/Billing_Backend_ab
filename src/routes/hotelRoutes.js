const express = require("express");
const {
  uploadImages,
  deleteImage,
  getAllImages,
  addHotel,
  getAllHotels,
  deleteHotels
} = require("../controllers/hotelController");

const upload = require("../middleware/uploadMiddleware"); // ✅ match the export
const router = express.Router();

// ----- Hotel CRUD -----
router.post("/add", addHotel);
router.get("/all", getAllHotels);
router.delete("/:id", deleteHotels);

// ----- Hotel Images -----
router.post("/upload-images", upload.array("images", 10), uploadImages);
router.delete("/delete-image/:id", deleteImage); // separate path to avoid conflict with hotel delete
router.get("/images", getAllImages); // get images (optionally filter by hotelId)

// Export router
module.exports = router;
