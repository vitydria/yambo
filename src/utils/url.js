export const baseUrl = "https://res.cloudinary.com/crazy-imagine/image/upload/";

export const getUrl = async (form) => {
  let url;

  const prize = parseInt(
    `${form?.firstPrize}${form?.secondPrize}${form?.thirdPrize}${form?.fourthPrize}`,
    10
  ).toString(16);

  const encodeURL = window.btoa(
    `${form?.gameSelected}/${prize}/${form?.images[0]}/${form?.images[1]}/${form?.images[2]}/${form?.images[3]}`
  );

  url = `?g=${encodeURL}`;

  return url;
};
