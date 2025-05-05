const ImageUpload = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-2xl">
      <label
        htmlFor="fileinput"
        className="block w-full cursor-pointer p-4 text-center hover:border-blue-500 transition-all duration-[0.2s] border-2 border-dashed active:border-blue-300 border-gray-300 rounded-lg"
      >
        <input type="file" id="fileinput" className="hidden" />
        <span className="text-lg font-medium text-gray-600">
          Click and Drag to upload Your Image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
