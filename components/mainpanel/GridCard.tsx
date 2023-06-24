import { BadgeDelta, Card, Col, Flex, Grid, Metric, Text } from "@tremor/react";
import { StarIcon } from "@heroicons/react/24/solid";

function GridCard({ results }: Props) {
  const currentPrice = results?.market_data?.current_price?.eur;
  const lastUpdated = results?.market_data?.last_updated;
  const priceChangePercentage24h =
    results?.market_data?.price_change_percentage_24h;
  const deltaType =
    priceChangePercentage24h && priceChangePercentage24h < 0
      ? "moderateDecrease"
      : "moderateIncrease";
  const developerScore = results?.developer_score;

  return (
    <Grid numItems={1} numItemsSm={1} numItemsLg={2} className="gap-5">
      <Col>
        <Card decoration="top">
          <Flex alignItems="start">
            <div>
              <Text>Current Price</Text>
              <Metric>{currentPrice} €</Metric>
            </div>
            <BadgeDelta deltaType={deltaType}>
              {priceChangePercentage24h}%
            </BadgeDelta>
          </Flex>
          <Text>{lastUpdated}</Text>
        </Card>
      </Col>
      <Card decoration="top">
        <Text>Developer Score</Text>
        <Flex>
          <Metric>{developerScore} </Metric>
          <StarIcon className="h-8 w-8 cursor-pointer dark:text-zinc-100" />
        </Flex>
      </Card>
    </Grid>
  );
}

export default GridCard;
