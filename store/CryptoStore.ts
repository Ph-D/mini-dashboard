import { create } from 'zustand';
// import fetchCrypto from '@/lib/fetchCrypto';

export const useCryptoStore = create<CryptoState>((set) => ({
  selectedCrypto: '',
  fetchDataState: null,
  fetchLoadingState: null,
  setSelectedCrypto: (crypto) => set({ selectedCrypto: crypto }),
  setFetchLoadingState: (state) => set({ fetchLoadingState: state }),
  setFetchDataState: (data) => set({ fetchDataState: data }),
}));





