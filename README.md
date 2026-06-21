# 🚀 AI Image Enhancer

An AI-powered image enhancement web application that transforms low-quality images into clearer, higher-resolution versions using image enhancement APIs.

## ✨ Features

* 📸 Drag & Drop Image Upload
* 🖼️ Original vs Enhanced Image Preview
* ⬇️ Download Enhanced Images
* ⚡ Fast AI-Powered Processing
* 🎨 Modern Responsive UI
* 📱 Mobile Friendly Design
* 🔄 Real-Time Enhancement Workflow

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### API & Networking

* Axios

### AI Enhancement

* AI Image Enhancement API

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Home.jsx
│   ├── ImageUpload.jsx
│   ├── ImagePreview.jsx
│   ├── DownloadButton.jsx
│   ├── Loading.jsx
│   └── Stats.jsx
│
├── utils/
│   └── enhanceImageApi.js
│
├── App.jsx
└── main.jsx
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <your-repository-url>
cd ImageEnhancer
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create a `.env` file in the root directory:

```env
VITE_AI_API_KEY=YOUR_API_KEY
```

### Start Development Server

```bash
npm run dev
```

## 🚀 Build for Production

```bash
npm run build
```

## 📸 Application Workflow

1. Upload an image using drag & drop or file picker.
2. Image is sent to the AI enhancement API.
3. AI processes and improves image quality.
4. Enhanced image is displayed alongside the original image.
5. User can download the enhanced result.

## 🎯 Future Improvements

* Dark Mode
* Before/After Comparison Slider
* Image Enhancement History
* Multiple Enhancement Modes
* User Authentication
* Cloud Storage Support
* Batch Image Processing

## 👨‍💻 Author

**Krishna Prajapati**

B.Tech CSE (AI & ML)

Quantum University, Roorkee

## 📄 License

This project is licensed under the MIT License.
