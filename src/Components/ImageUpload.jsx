import React from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({ uploadImageHandler }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      uploadImageHandler(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    multiple: false,
  });

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className="cursor-pointer p-6 text-center border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-colors duration-200"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600 text-lg font-medium">
          Drag & drop an image here, or click to select
        </p>
        <p className="text-sm text-gray-400 mt-1">
          (Only .jpg, .jpeg, .png files are supported)
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;
