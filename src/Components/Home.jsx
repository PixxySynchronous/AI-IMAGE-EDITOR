import React, { useState, useEffect } from 'react';
import Imageupload from './Imageupload';     // Import your components properly
import Imagepreview from './Imagepreview';
import {
  enhancedImageAPI,
  removeBackgroundAPI,
  compressImageAPI,
  colorizeImageAPI,
  removeWatermarkAPI,
} from './API/EnhancedimageAPI'

const Home = ({ tool, onEnhancedImageChange }) => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Inform parent about enhanced image changes
  useEffect(() => {
    if (onEnhancedImageChange) {
      onEnhancedImageChange(enhancedImage);
    }
  }, [enhancedImage, onEnhancedImageChange]);

  // Clear images when tool changes
  useEffect(() => {
    setUploadImage(null);
    setEnhancedImage(null);
    setLoading(false);
  }, [tool]);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      let result;

      switch (tool.name) {
        case "enhance":
          result = await enhancedImageAPI(file);
          break;
        case "remove_bg":
          result = await removeBackgroundAPI(file, tool.params);
          break;
        case "compress":
          result = await compressImageAPI(file, tool.params);
          break;
        case "colorize":
          result = await colorizeImageAPI(file);
          break;
        case "remove_watermark":
          result = await removeWatermarkAPI(file, tool.params);
          break;
        default:
          throw new Error("Unknown tool selected");
      }

      setEnhancedImage(result);
    } catch (error) {
      console.error(error);
      alert("Error while processing the image. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Imageupload UploadImageHandler={UploadImageHandler} />
      <Imagepreview
        loading={loading}
        uploaded={uploadImage}
        enhance={enhancedImage}
      />
    </>
  );
};

export default Home;
