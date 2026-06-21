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
        <div className="w-full max-w-3xl">
            <label
                htmlFor="fileInput"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`block cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300 shadow-xl ${
                    isDragging
                        ? "border-blue-500 bg-blue-100 scale-[1.02]"
                        : "border-gray-300 bg-white hover:border-blue-500"
                }`}
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="image/*"
                    onChange={ShowImageHandler}
                />

              <div className="py-6 px-6 flex flex-col items-center">
                   <div className="text-4xl mb-2">
                        📸
                    </div>

                  <h2 className="text-lg font-bold text-slate-800">
                        Drag & Drop Your Image
                    </h2>

                   <p className="text-sm text-gray-500 mt-1">
                        or click to browse files
                    </p>

                    <span className="mt-2 text-sm text-gray-400">
                        JPG • PNG • WEBP
                    </span>
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;