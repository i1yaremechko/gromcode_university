export const parseUser = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    return null;
  }
};
