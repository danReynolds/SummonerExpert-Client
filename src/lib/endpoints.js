export const getSimilarity = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SUMMONER_EXPERT_API}/similarity`)
    return await response.json();
  } catch(e) {
    console.log(e);
  }
}
