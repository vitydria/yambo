export const getValue = (key, defaultValue) => {
  if (window.sessionStorage.getItem(key))
    return JSON.parse(window.sessionStorage.getItem(key));
  else return defaultValue;
};

export const removeValue = (key) => {
  window.sessionStorage.removeItem(key);
};

export const setValue = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};
