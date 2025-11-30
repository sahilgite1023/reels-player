const fs = require("fs");
const path = require("path");

exports.uploadVideo = (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No video uploaded" });

  res.json({
    message: "Video uploaded successfully",
    fileName: req.file.filename,
    url: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
  });
};

exports.getVideos = (req, res) => {
  const folder = path.join(__dirname, "../uploads");

  fs.readdir(folder, (err, files) => {
    if (err) return res.status(500).json({ message: "Error showing videos" });

    const list = files.map((name, index) => ({
      id: index + 1,
      fileName: name,
      url: `${req.protocol}://${req.get("host")}/uploads/${name}`
    }));

    res.json(list);
  });
};

exports.deleteVideo = (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.params.fileName);

  fs.unlink(filePath, (err) => {
    if (err) return res.status(404).json({ message: "Video not found" });
    res.json({ message: "Video deleted successfully" });
  });
};
