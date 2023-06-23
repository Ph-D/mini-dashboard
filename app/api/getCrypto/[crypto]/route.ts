import { NextResponse } from "next/server";



export async function GET(request: Request, { params }: { params: { crypto: string } }) {

    const { crypto } = params;

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`);
    const data = await response.json();

    return NextResponse.json(data);

}