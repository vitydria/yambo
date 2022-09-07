import { useState, useEffect } from "react";
import { getValue, removeValue, setValue } from "../utils/sessionstorage";

const useImages = () => {
  const [images, setImages] = useState(getValue("images", []));

  const handleImages = (newImage) => {
    setImages((thumbnails) => [...thumbnails, newImage]);
  };

  const updateImages = (newImage, index) => {
    let newArr = [...images];
    newArr[index] = newImage;
    setImages(newArr);
  };

  const clearImages = () => {
    setImages([]);
    removeValue("images");
  };

  useEffect(() => {
    if (images.length > 0) setValue("images", images);
  }, [images]);

  return { images, handleImages, updateImages, clearImages };
};

export default useImages;
