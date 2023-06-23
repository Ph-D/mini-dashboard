import useSWR from 'swr';
import fetchCrypto from '@/lib/fetchCrypto';

function useCryptoAPI(currency: string) {

  const { data, error, isLoading, mutate } = useSWR(currency, fetchCrypto, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    data,
    error,
    isLoading,
    mutate
  };
}

export default useCryptoAPI;

/* SIMPLE PROMISE BASED FETCH */

// import { useState, useEffect } from 'react';
// import fetchCrypto from '@/lib/fetchCrypto';

// function useCryptoAPI(currency: string) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState<string>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const result = await fetchCrypto(currency);
//         setData(result);
//       } catch (error) {
//         setError(error);
//       }
//       setIsLoading(false);
//     };

//     if (currency) {
//       fetchData();
//     }
//   }, [currency]);

//   return {
//     data,
//     error,
//     isLoading,
//   };
// }

// export default useCryptoAPI;