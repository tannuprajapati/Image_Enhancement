import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);

        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
            setloading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <ImageUpload UploadImageHandler={UploadImageHandler} />

            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />

            <BeforeAfterSlider
                original={uploadImage}
                enhanced={enhancedImage?.image}
            />
        </div>
    );
};

export default Home;