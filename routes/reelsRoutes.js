const express = require("express");
const upload = require("../middleware/upload");
const { uploadVideo, getVideos, deleteVideo } = require("../controllers/reelsController");

const router = express.Router();

router.post("/upload", upload.single("video"), uploadVideo);
router.get("/", getVideos);
router.delete("/:fileName", deleteVideo);

module.exports = router;
