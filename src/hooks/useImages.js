import { useState } from "react";

const useImages = () => {
  const [images, setImages] = useState(
    window.localStorage.getItem("images")
      ? JSON.parse(window.localStorage.getItem("images"))
      : []
  );

  const handleImages = (newImage) => {
    window.localStorage.setItem(
      "images",
      JSON.stringify([...images, newImage])
    );
    setImages((imageArray) => [...imageArray, newImage]);
  };

  return { images, handleImages };
};

export default useImages;
