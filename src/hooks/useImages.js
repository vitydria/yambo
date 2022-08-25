import { useState } from "react";

const useImages = () => {
  const [images, setImages] = useState([]);

  return { images, setImages };
};

export default useImages;
