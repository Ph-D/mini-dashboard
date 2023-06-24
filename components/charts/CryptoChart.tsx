"use client";
import { Card, AreaChart, Title } from "@tremor/react";

function CryptoChart({ results }: Props) {
  const daily = results?.dailyData?.prices
    ?.map((data) => {
      return {
        days: new Date(data[0]).toLocaleDateString(),
        prices: data[1],
      };
    })
    .slice(0, 20);

  const data =
    daily?.map((item) => {
      return {
        days: item.days,
        Price: item.prices,
      };
    }) ?? [];

  const dataFormatter = (value: number) => {
    return `${value}€`;
  };

  return (
    <Card className="flex-1 p-5" decoration="top" decorationColor="blue">
      <Title>Crypto Rate</Title>
      <AreaChart
        className="h-72 mt-4"
        data={data}
        index="days"
        categories={["Price"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}

export default CryptoChart;
