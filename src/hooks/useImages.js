import { useState, useEffect } from "react";

const useImages = () => {
  const [images, setImages] = useState(
    window.sessionStorage.getItem("images")
      ? JSON.parse(window.sessionStorage.getItem("images"))
      : []
  );

  const handleImages = (newImage) => {
    setImages((thumbnails) => [...thumbnails, newImage]);
  };

  const updateImages = (newImage, index) => {
    let newArr = [...images];
    newArr[index] = newImage;
    setImages(newArr);
  };

  useEffect(() => {
    if (images.length > 0)
      window.sessionStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  return { images, handleImages, updateImages };
};

export default useImages;
