import useSWR from 'swr';
import fetchCrypto from '@/lib/fetchCrypto';

function useCryptoAPI(currency: string) {

  const { data, error, isLoading, mutate } = useSWR(currency, fetchCrypto, {
    revalidateIfStale: false,
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

