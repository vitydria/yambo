import { useState } from "react";

const useThumbnail = () => {
  const [thumbnail, setThumbnail] = useState(
    window.sessionStorage.getItem("thumbnails")
      ? JSON.parse(window.sessionStorage.getItem("thumbnails"))
      : []
  );

  const handleThumbnails = (newThumbnail) => {
    window.sessionStorage.setItem(
      "thumbnails",
      JSON.stringify([...thumbnail, newThumbnail])
    );
    setThumbnail((thumbnails) => [...thumbnails, newThumbnail]);
  };

  const updateThumbnails = (newThumbnail, index) => {
    let newArr = [...thumbnail];
    newArr[index] = newThumbnail;
    window.sessionStorage.setItem("thumbnails", JSON.stringify(newArr));
    setThumbnail(newArr);
  };

  return {
    thumbnail,
    handleThumbnails,
    updateThumbnails,
  };
};

export default useThumbnail;
