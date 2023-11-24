import { NextResponse } from 'next/server'

export async function POST() {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000))
  return NextResponse.json({})
}
