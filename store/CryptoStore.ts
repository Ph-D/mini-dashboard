import { create } from 'zustand';
// import fetchCrypto from '@/lib/fetchCrypto';

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

export const useCryptoStore = create<CryptoState>((set) => ({
  selectedCrypto: '',
  fetchDataState: null,
  fetchLoadingState: null,
  setSelectedCrypto: (crypto) => set({ selectedCrypto: crypto }),
  setFetchLoadingState: (state) => set({ fetchLoadingState: state }),
  setFetchDataState: (data) => set({ fetchDataState: data }),
}));





