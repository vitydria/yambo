export const baseUrl = "https://res.cloudinary.com/crazy-imagine/image/upload/";

export const getUrl = async (form) => {
  let url = "";
  let prize = "";
  let encodeURL = "";

  if (Object.keys(form.prizes).length === 4) {
    const { firstPrize, secondPrize, thirdPrize, fourthPrize } = form.prizes;
    prize = parseInt(
      `${firstPrize}${secondPrize}${thirdPrize}${fourthPrize}`,
      10
    ).toString(16);
  }

  if (prize !== "" && form.images.length === 4) {
    encodeURL = window.btoa(
      `${form?.gameSelected}/${prize}/${form?.images[0]}/${form?.images[1]}/${form?.images[2]}/${form?.images[3]}`
    );

    url = `?g=${encodeURL}`;
  }

  return url;
};
