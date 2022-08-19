const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

const getUrl = async (form) => {
  let url;
  let arrayImages = [];

  for (let i = 0; i < 4; i++) {
    const image = await getBase64(form.images[i]);
    arrayImages.push(image);
  }

  url = `?game=${form.gameSelected}&prizeOne=${form.firstPrize}&prizeTwo=${form.secondPrize}&prizeThree=${form.thirdPrize}&prizeFour=${form.fourthPrize}&imageOne=${arrayImages[0]}&imageTwo=${arrayImages[1]}&imageThree=${arrayImages[2]}&imageFour=${arrayImages[3]}`;
  return url;
};

export default getUrl;
