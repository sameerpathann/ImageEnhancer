import Loader from "./Loader";

const ImagePreveiw = ({ isLoading, uploadedImage, enhancedImage }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {uploadedImage ? (
          <img
            src={uploadedImage}
            className="w-full h-80 object-cover"
            alt="Uploaded Image"
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
        {enhancedImage ? (
          <img
            src={enhancedImage}
            className="w-full h-80 object-cover"
            alt="Enhanced Image"
          />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreveiw;
