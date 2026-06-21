const DownloadButton = ({ imageUrl }) => {
  return (
    <a
      href={imageUrl}
      download="enhanced-image.png"
      className="bg-white text-black px-5 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
    >
      Download
    </a>
  );
};

export default DownloadButton;