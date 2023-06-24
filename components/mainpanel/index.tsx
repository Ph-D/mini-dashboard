"use client";
import React from "react";
import { useCryptoStore } from "@/store/CryptoStore";
import CryptoChart from "../charts/CryptoChart";
import InformationCard from "./InformationCard";
import GridCard from "./GridCard";
import Loader from "../layouts/Loader";

function MainPanel() {
  const { fetchDataState, fetchLoadingState } = useCryptoStore();

  return (
    <>
      {fetchLoadingState === "success" ? (
        <div className="flex-1 overflow-auto p-5 lg:p-10 relative">
          <div className="mb-5">
            <InformationCard results={fetchDataState} />
          </div>
          <div className="mb-5">
            <GridCard results={fetchDataState} />
          </div>
          <CryptoChart results={fetchDataState} />
        </div>
      ) : (
        <div className="flex-1 relative">
          <Loader />
        </div>
      )}
    </>
  );
}

export default MainPanel;
