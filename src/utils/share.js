export const copyToClipboard = (url, setCopyMessage) => {
  navigator.clipboard.writeText(`${window.location.origin}/${url}`);
  setCopyMessage("URL Copied!");
  window.sessionStorage.clear();
};

export const handleSharing = async (url, setSharedMessage, setCopyMessage) => {
  const sharedData = {
    text: "Enjoy",
    title: "Yambo",
    url: `${window.location.origin}/${url}`,
  };

  if (navigator.share) {
    try {
      await navigator.share(sharedData).then(() => {
        setSharedMessage("Share again");
        window.sessionStorage.clear();
      });
    } catch (e) {
      navigator.clipboard.writeText(`${window.location.origin}/${url}`);
      setSharedMessage("URL Copied!");
      setCopyMessage("URL Copied!");
      window.sessionStorage.clear();
    }
  } else {
    navigator.clipboard.writeText(`${window.location.origin}/${url}`);
    setSharedMessage("URL Copied!");
    setCopyMessage("URL Copied!");
    window.sessionStorage.clear();
  }
};
