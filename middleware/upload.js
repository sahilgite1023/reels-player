const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadFolder = path.join(__dirname, "../uploads");

try {
  if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
  }
} catch (error) {
  console.error("Error creating uploads folder:", error.message);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  
  filename: (req, file, cb) => {
    try {
      const fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
    } catch (error) {
      cb(error, null);
    }
  },
});

const upload = multer({ storage });

module.exports = upload;
