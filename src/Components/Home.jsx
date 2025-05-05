import React, { useState } from "react";
import ImagePreveiw from "./ImagePreveiw";
import ImageUpload from "./imageUpload";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const uploadImageHandler = (file) => {
    //Creating image url to store in state
    const fileURL = URL.createObjectURL(file);
    setUploadedImage(fileURL);
    setIsloading(true);
    //calling API to enhance the image
  };
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreveiw
        isLoading={isLoading}
        uploadedImage={uploadedImage}
        enhancedImage={enhancedImage}
      />
    </>
  );
};

export default Home;
