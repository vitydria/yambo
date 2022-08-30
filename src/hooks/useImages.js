import { useState } from "react";

const useImages = () => {
  const [images, setImages] = useState(
    window.sessionStorage.getItem("images")
      ? JSON.parse(window.sessionStorage.getItem("images"))
      : []
  );

  const handleImages = (newImage) => {
    window.sessionStorage.setItem(
      "images",
      JSON.stringify([...images, newImage])
    );
    setImages((imageArray) => [...imageArray, newImage]);
  };

  const updateImages = (newImage, index) => {
    let newArr = [...images];
    newArr[index] = newImage;
    window.sessionStorage.setItem("images", JSON.stringify(newArr));
    setImages(newArr);
  };

  return { images, handleImages, updateImages };
};

export default useImages;
