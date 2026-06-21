import ReactCompareImage from "react-compare-image";

const BeforeAfterSlider = ({ original, enhanced }) => {
    if (!original || !enhanced) return null;

    return (
        <div className="w-full max-w-4xl mt-8 bg-white rounded-2xl shadow-lg p-4">
            <h2 className="text-2xl font-bold text-center mb-4">
                Before vs After
            </h2>

            <ReactCompareImage
                leftImage={original}
                rightImage={enhanced}
            />
        </div>
    );
};

export default BeforeAfterSlider;