export const navigateTo = (slug, navigate) => {
  setTimeout(() => {
    navigate(slug, { replace: true });
  }, 1000);
};
