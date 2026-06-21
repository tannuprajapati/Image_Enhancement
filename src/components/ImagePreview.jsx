import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className="mt-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8 justify-center">

            {/* Original Image */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex-1 min-w-[350px]">
                <h2 className="text-2xl font-semibold text-center bg-slate-800 text-white py-4">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Original"
                        className="w-full h-[300px] object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-[300px] bg-gray-100 text-gray-500 text-lg">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex-1 min-w-[350px]">
                <h2 className="text-2xl font-semibold text-center bg-blue-700 text-white py-4">
                    Enhanced Image
                </h2>

                {props.loading ? (
                    <div className="h-[300px] flex items-center justify-center">
                        <Loading />
                    </div>
                ) : props.enhanced ? (
                    <div className="relative">
                        <img
                            src={props.enhanced}
                            alt="Enhanced"
                            className="w-full h-[300px] object-cover"
                        />

                        <a
                            href={props.enhanced}
                            download="enhanced-image.png"
                            className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
                        >
                            Download
                        </a>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[300px] bg-gray-100 text-gray-500 text-lg">
                        No Enhanced Image
                    </div>
                )}
            </div>

        </div>
    );
};

export default ImagePreview;