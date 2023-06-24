import React from "react";
import { Card, Text } from "@tremor/react";

function InformationCard({ results }: Props) {
  const description = results?.description?.en;
  const trimmedDescription = description?.split("\n").slice(0, 2).join("\n");
  const finalDescription = trimmedDescription
    ? `${trimmedDescription.slice(0, 200)}...`
    : "No description";

  return (
    <Card decoration="left" decorationColor="blue">
      <Text className="text-lg">{finalDescription}</Text>
    </Card>
  );
}

export default InformationCard;
