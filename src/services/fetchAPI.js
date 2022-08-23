const fetchAPI = async (endPoint) => {
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

export default fetchAPI;
