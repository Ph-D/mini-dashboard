"use client";
import React from "react";
import CryptoPicker from "./CryptoPicker";
import Image from "next/image";
import { useCryptoStore } from "@/store/CryptoStore";

function SidePanel() {
  const { fetchDataState } = useCryptoStore();
  const image = fetchDataState?.image?.large;
  const name = fetchDataState?.name;

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-700 text-white p-10 md-custom:w-[450px]">
      <div className="pb-5 flex items-center justify-between flex-wrap">
        {name && <h1 className="text-6xl font-bold mr-4 w-250">{name}</h1>}
        {image && (
          <Image
            src={image}
            alt="image"
            width={75}
            height={75}
            loading="eager"
          />
        )}
      </div>
      <CryptoPicker />
    </div>
  );
}

export default SidePanel;
