const getQueryParams = (searchParams) => {
  const game = searchParams.get("game");
  const prizeOne = searchParams.get("prizeOne");
  const prizeTwo = searchParams.get("prizeTwo");
  const prizeThree = searchParams.get("prizeThree");
  const prizeFour = searchParams.get("prizeFour");
  const imageOne = searchParams.get("imageOne");
  const imageTwo = searchParams.get("imageTwo");
  const imageThree = searchParams.get("imageThree");
  const imageFour = searchParams.get("imageFour");

  const prizes = [prizeOne, prizeTwo, prizeThree, prizeFour];
  const images = [imageOne, imageTwo, imageThree, imageFour];

  return { game, prizes, images };
};

export default getQueryParams;
