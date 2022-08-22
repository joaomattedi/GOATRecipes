import fetchAPI from './fetchAPI';

const requestRecomendation = async (setRecomendation, endPoint, chave) => {
  const recomendationArray = await fetchAPI(endPoint);
  console.log(recomendationArray);
  setRecomendation(recomendationArray[chave]);
  console.log(recomendationArray[chave]);
  console.log(recomendationArray);
};
export default requestRecomendation;
