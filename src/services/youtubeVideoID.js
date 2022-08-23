const videoId = (url) => {
  const newURL = url.split('/');
  const MENOS_UM = -1;
  const newArray = newURL.at(MENOS_UM).split('=');
  return newArray[1];
};

export default videoId;
