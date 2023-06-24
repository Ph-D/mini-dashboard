import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { crypto: string } }
) {
  const { crypto } = params;

  const [response, hourly] = await Promise.all([
    fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`),
    fetch(
      `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=eur&days=20&interval=daily&precision=0`
    ),
  ]);

  const [data, dailyData] = await Promise.all([response.json(), hourly.json()]);

  return NextResponse.json({ ...data, dailyData });
}
