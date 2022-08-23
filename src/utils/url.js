const getUrl = async (form) => {
  let url;
  url = `?game=${form.gameSelected}&prizeOne=${form.firstPrize}&prizeTwo=${form.secondPrize}&prizeThree=${form.thirdPrize}&prizeFour=${form.fourthPrize}&imageOne=${form.images[0]}&imageTwo=${form.images[1]}&imageThree=${form.images[2]}&imageFour=${form.images[3]}`;
  return url;
};

export default getUrl;
