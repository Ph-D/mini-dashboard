const fetchCrypto =  (currency: string) => {
  console.log("fetchCrypto endpoint call");
  return fetch("/api/getCrypto/" + currency).then(res => res.json());

}


export default fetchCrypto;

