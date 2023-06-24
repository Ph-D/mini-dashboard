const fetchCrypto = (currency: string) => {
  return fetch("/api/getCrypto/" + currency).then((res) => res.json());
};

export default fetchCrypto;
