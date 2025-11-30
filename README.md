
# 🎬 Reels Backend API (Node.js + Express)

This project provides a backend API for uploading, viewing, and deleting short-form reel videos (like Instagram Reels / YouTube Shorts / TikTok).  
Developed using Node.js, Express, Multer, and file-based storage. Designed for mobile (Android ExoPlayer) and web integration.

---

## 🚀 Features

- Upload videos using API (POST request, multipart/form-data)
- Fetch all uploaded videos (GET request)
- Delete specific video by filename (DELETE request)
- Video streaming support
- File system-based video storage
- Clean professional folder structure (Routes, Controllers, Middleware)
- Ready for integration with Android frontend

---

## 🏗 Project Structure



reels-backend/
├── server.js
├── routes/
│ └── reelsRoutes.js
├── controllers/
│ └── reelsController.js
├── middleware/
│ └── upload.js
├── uploads/ // saves uploaded videos (ignored by Git)
├── .gitignore
└── package.json


---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/api/reels/upload` | Upload a video file |
| GET | `/api/reels` | Get list of all uploaded reels |
| DELETE | `/api/reels/:fileName` | Delete a video by file name |

---

## 🧪 Testing Instructions (Postman)

### 👉 Upload Video


POST http://localhost:5000/api/reels/upload

Body → form-data → Key: `video` → Type: File → select `.mp4`

**Response**
```json
{
  "message": "Video uploaded successfully",
  "fileName": "1734748948333-myvideo.mp4",
  "url": "http://localhost:5000/uploads/1734748948333-myvideo.mp4"
}

👉 Get Reels List
GET http://localhost:5000/api/reels

👉 Delete Reel By FileName
DELETE http://localhost:5000/api/reels/1734748948333-myvideo.mp4

🛠 Tech Stack
Technology	Purpose
Node.js	Runtime
Express.js	Backend framework
Multer	File upload handling
CORS	Cross-origin support
Postman	Testing API
📦 Installation
git clone https://github.com/your-username/reels-backend.git
cd reels-backend
npm install
node server.js

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you want to change.

📝 License

MIT License

👨‍💻 Author

Sahil Gite
📍 India
💼 MCA Student
🔗 GitHub: https://github.com/sahilgite1023




