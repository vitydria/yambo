const getQueryParams = (searchParams) => {
  if (searchParams.get("g") !== null) {
    const query = window.atob(searchParams.get("g"));
    let [game, tokens, ...urls] = query.split("/");

    const prizes = parseInt(tokens, 16)
      .toString()
      .match(/.{1,2}/g);

    const images = [
      `${urls[0]}/${urls[1]}`,
      `${urls[2]}/${urls[3]}`,
      `${urls[4]}/${urls[5]}`,
      `${urls[6]}/${urls[7]}`,
    ];

    return { game, prizes, images };
  } else {
    const game = "unset";
    return { game };
  }
};

export default getQueryParams;
