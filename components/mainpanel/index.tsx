"use client";
import React from "react";
import { useCryptoStore } from "@/store/CryptoStore";
import CryptoChart from "../charts/CryptoChart";
import InformationCard from "./InformationCard";
import GridCard from "./GridCard";

function MainPanel() {
  const { fetchDataState, fetchLoadingState } = useCryptoStore();

  return (
    <>
      {fetchLoadingState === "success" ? (
        <>
          <div className="mb-5">
            <InformationCard results={fetchDataState} />
          </div>
          <div className="mb-5">
            <GridCard results={fetchDataState} />
          </div>
          <CryptoChart results={fetchDataState} />
        </>
      ) : (
        <div>test</div>
      )}
    </>
  );
}

export default MainPanel;
