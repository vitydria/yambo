import { useState, useEffect } from "react";

const useThumbnail = () => {
  const [thumbnail, setThumbnail] = useState(
    window.sessionStorage.getItem("thumbnails")
      ? JSON.parse(window.sessionStorage.getItem("thumbnails"))
      : []
  );

  const handleThumbnails = (newThumbnail) => {
    setThumbnail((thumbnails) => [...thumbnails, newThumbnail]);
  };

  const updateThumbnails = (newThumbnail, index) => {
    let newArr = [...thumbnail];
    newArr[index] = newThumbnail;
    setThumbnail(newArr);
  };

  useEffect(() => {
    if (thumbnail.length > 0)
      window.sessionStorage.setItem("thumbnails", JSON.stringify(thumbnail));
  }, [thumbnail]);

  return {
    thumbnail,
    handleThumbnails,
    updateThumbnails,
  };
};

export default useThumbnail;
