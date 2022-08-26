const getQueryParams = (searchParams) => {
  if (searchParams.get("g") !== null) {
    const query = window.atob(searchParams.get("g"));
    console.log(query);
    const settings = query.split("/");
    const game = settings[0];
    console.log(settings[1]);
    const prizes = parseInt(settings[1], 16)
      .toString()
      .match(/.{1,2}/g);
    const images = [settings[2], settings[3], settings[4], settings[5]];
    console.log(images);
    return { game, prizes, images };
  } else {
    const game = "unset";
    return { game };
  }
};

export default getQueryParams;
