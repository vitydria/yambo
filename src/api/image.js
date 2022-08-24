const uploadImage = async (image) => {
  let myHeaders = new Headers();
  myHeaders.append("clientId", "6ef6be8daa16b81");

  let formdata = new FormData();
  formdata.append("image", image);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const data = await fetch(
      "https://api.imgur.com/3/upload",
      requestOptions
    ).then((response) => console.log(response));

    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export default uploadImage;
