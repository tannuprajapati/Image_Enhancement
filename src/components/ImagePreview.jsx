import Loading from "./Loading";
import DownloadButton from "./DownloadButton";
import { FiDownload } from "react-icons/fi";

const ImagePreview = (props) => {
    console.log(props);
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

            {/* Original Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Original Image"
                        className="w-full h-80 object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
                    Enhanced Image
                </h2>

                {props.loading ? (
                    <Loading />
                ) : props.enhanced ? (
                    <div className="relative">
                        <img
                            src={props.enhanced}
                            alt="Enhanced Image"
                            className="w-full h-80 object-cover"
                        />

                        <a
                            href={props.enhanced}
                            download="enhanced-image.png"
                            className="absolute top-3 right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
                        >
                            <FiDownload size={20} />
                        </a>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Enhanced Image
                    </div>
                )}
            </div>

        </div>
    );
};

export default ImagePreview;