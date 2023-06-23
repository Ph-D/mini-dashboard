

type option = {
  value: string;
  label: string;
} | null;


interface Crypto {
  id: string;
  name: string;
  description: {
    en: string;
  };
  symbol: string;
  price: number;
  marketCap: number;
  volume: number;
  image: {
    large: string;
    small: string;
  }
};

interface CryptoState {
  selectedCrypto: string;
  fetchDataState: Crypto | null;
  fetchLoadingState: 'loading' | 'error' | 'success' | null;
  setSelectedCrypto: (crypto: string) => void;
  setFetchLoadingState: (state: 'loading' | 'error' | 'success') => void;
  setFetchDataState: (data: Crypto) => void;
};