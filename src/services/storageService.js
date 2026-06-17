export const getStorage = (key) => {
  const value =
    localStorage.getItem(key);

  return value
    ? JSON.parse(value)
    : [];
};

export const saveStorage = (
  key,
  value
) => {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
};