import React, { useState } from "react";
import ImagePreveiw from "./ImagePreveiw";
import ImageUpload from "./imageUpload";
import { enhancedImageAPI } from "../Services/enhancedImageApi";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const uploadImageHandler = async (file) => {
    //Creating image url to store in state
    const fileURL = URL.createObjectURL(file);
    setUploadedImage(fileURL);
    setIsloading(true);
    try {
      const ehnacedImageUrl = await enhancedImageAPI(file);
      setEnhancedImage(ehnacedImageUrl);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
    }
  };
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreveiw
        isLoading={isLoading}
        uploadedImage={uploadedImage}
        enhancedImage={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
