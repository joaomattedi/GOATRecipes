import fetchAPI from './fetchAPI';

const requestRecomendation = async (setRecomendation, endPoint, chave) => {
  const recomendationArray = await fetchAPI(endPoint);
  setRecomendation(recomendationArray[chave]);
};
export default requestRecomendation;
