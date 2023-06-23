'use client'

import React from 'react'
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { useCryptoStore } from "@/store/CryptoStore";


function MainPanel() {

  const { selectedCrypto, fetchDataState, fetchLoadingState } = useCryptoStore();

  return (
    <>
      {selectedCrypto && <h1>{selectedCrypto}</h1>}
      {fetchLoadingState}
      {fetchDataState && <p>{fetchDataState?.description?.en}</p>}

      <Card className="max-w-xs mx-auto">
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex className="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar value={32} className="mt-2" />
        </Card>
        
    </>
  )
}

export default MainPanel;