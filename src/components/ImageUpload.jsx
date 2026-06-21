import { useState } from "react";

const ImageUpload = (props) => {
    const [isDragging, setIsDragging] = useState(false);

    const ShowImageHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            props.UploadImageHandler(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];

        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-2xl">
            <label
                htmlFor="fileInput"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`block w-full cursor-pointer border-2 border-dashed rounded-xl py-8 px-6 text-center transition-all duration-300 ${
                    isDragging
                        ? "border-blue-500 bg-blue-50 scale-[1.02]"
                        : "border-gray-300 hover:border-blue-500"
                }`}
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="image/*"
                    onChange={ShowImageHandler}
                />

                <div className="flex flex-col items-center gap-2">
                    <div className="text-3xl">📸</div>

                    <h3 className="text-lg font-semibold text-gray-700">
                        Drag & Drop Your Image
                    </h3>

                    <p className="text-sm text-gray-500">
                        or click to browse files
                    </p>

                    <span className="text-xs text-gray-400">
                        JPG • PNG • WEBP
                    </span>
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;