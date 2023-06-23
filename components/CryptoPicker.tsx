"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useCryptoStore } from "@/store/CryptoStore";
import useCryptoAPI from "@/hook/useCryptoAPI";
import { cryptos } from "@/constants/cryptos";


const CryptoPicker = () => {
  const [crypto, setCrypto] = useState<option>({
    value: "bitcoin",
    label: "Bitcoin",
  });

  const [currency, setCurrency] = useState("bitcoin");
  const [isMounted, setIsMounted] = useState(false);

  const { data, error, isLoading, mutate } = useCryptoAPI(currency);
  const {
    setSelectedCrypto,
    setFetchLoadingState,
    setFetchDataState,
    fetchLoadingState,
  } = useCryptoStore();

  const id = Date.now().toString();
  const options = cryptos.map((crypto) => ({
    value: crypto.value,
    label: crypto.label,
  }));

  const handleSelectCrypto = (crypto: option) => {
    if (crypto) {
      setCrypto(crypto);
      setCurrency(crypto.value);
      setSelectedCrypto(crypto.value);
    }
  };

  useEffect(() => {
    if (isLoading) setFetchLoadingState("loading");
    if (error) setFetchLoadingState("error");
    if (data) setFetchLoadingState("success");
  }, [data, error, isLoading]);

  useEffect(() => {
    setIsMounted(true);
    mutate();
  }, [mutate]);

  useEffect(() => {
    if (data) {
      setFetchDataState(data);
    }
  }, [data]);

  return (
    <div className="space-y-4">
      <h1>CryptoPicker</h1>
      {isMounted ? (
        <div>
          <Select
            id={id}
            instanceId="crypto-picker"
            className="text-black"
            value={crypto}
            options={options}
            onChange={handleSelectCrypto}
            placeholder="Select a crypto"
          />
        </div>
      ) : null}
    </div>
  );
};

export default CryptoPicker;
