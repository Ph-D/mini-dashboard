type option = {
  value: string;
  label: string;
} | null;

interface Props {
  results: Crypto | null;
}

interface Crypto {
  id: string;
  name: string;
  description?: {
    en?: string;
  };
  symbol: string;
  price: number;
  marketCap: number;
  volume: number;
  image: {
    large: string;
    small: string;
  };
  dailyData: {
    prices: number[][];
  };
  developer_score: number;
  market_data: {
    current_price: {
      eur: number;
    };
    last_updated: string;
    price_change_percentage_24h: number;
  };
    
}

interface CryptoState {
  selectedCrypto: string;
  fetchDataState: Crypto | null;
  fetchLoadingState: "loading" | "error" | "success" | null;
  setSelectedCrypto: (crypto: string) => void;
  setFetchLoadingState: (state: "loading" | "error" | "success") => void;
  setFetchDataState: (data: Crypto) => void;
}
