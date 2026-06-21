const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">4K+</h3>
                <p className="text-gray-500 mt-2">Images Enhanced</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-3xl font-bold text-green-600">99%</h3>
                <p className="text-gray-500 mt-2">Quality Improvement</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-3xl font-bold text-purple-600">AI</h3>
                <p className="text-gray-500 mt-2">Powered Enhancement</p>
            </div>
        </div>
    );
};

export default Stats;