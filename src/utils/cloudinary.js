const PALETTE = {
  window: "#a95efa",
  windowBorder: "#a95efa",
  tabIcon: "#000000",
  menuIcons: "#FFF",
  textDark: "#000000",
  textLight: "#FFFFFF",
  link: "#5eb8fa",
  action: "#5eb8fa",
  inactiveTabIcon: "#000000",
  error: "#F44235",
  inProgress: "#0078FF",
  complete: "#20B832",
  sourceBg: "#fff",
};

const FRAME = {
  background: "#0E2F5B99",
};

const FONTS = {
  default: null,
  "'DM Sans', regular": {
    url: "https://fonts.googleapis.com/css?family=DM+Sans",
    active: true,
  },
};

const handleOpenWidget = (length, setImages) => {
  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "crazy-imagine",
      uploadPreset: "ml_default",
      sources: ["local"],
      maxImageFileSize: 2000000,
      maxFiles: 4,
      clientAllowedFormats: ["jpg", "png", "jpeg"],
      styles: {
        palette: PALETTE,
        frame: FRAME,
        fonts: FONTS,
      },
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        const newImage = result.info.url.slice(53);
        if (length < 4) {
          setImages((imageArray) => [...imageArray, newImage]);
        }
      }
    }
  );

  if (length < 4) myWidget.open();
};

export default handleOpenWidget;
