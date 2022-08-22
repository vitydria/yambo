const getQueryParams = (searchParams) => {
  const game = searchParams.get("game");
  const prizeOne = searchParams.get("prizeOne");
  const prizeTwo = searchParams.get("prizeTwo");
  const prizeThree = searchParams.get("prizeThree");
  const prizeFour = searchParams.get("prizeFour");

  const prizeArray = [prizeOne, prizeTwo, prizeThree, prizeFour];

  return { game, prizeArray };
};

export default getQueryParams;
