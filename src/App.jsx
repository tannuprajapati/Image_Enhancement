import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-slate-800">
          AI Image
          <span className="text-blue-600"> Enhancer</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 text-center mt-4 max-w-2xl">
          Transform blurry images into crystal clear visuals using AI-powered enhancement.
        </p>

        <div className="mt-10 w-full flex justify-center">
          <Home />
        </div>

      </div>
    </div>
  );
}

export default App;