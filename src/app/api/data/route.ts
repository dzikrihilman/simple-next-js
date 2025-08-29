import { NextResponse } from 'next/server';

export async function GET() {
  const payload = {
    fromApi: true,
    message: 'Data dari API route',
    time: new Date().toISOString(),
    random: Math.random(),
  };

  return NextResponse.json(payload);
}
