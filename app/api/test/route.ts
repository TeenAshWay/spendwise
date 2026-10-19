import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  baseURL: "https://api.tokenfactory.nebius.com/v1/", // verify against the snippet in your Nebius console
  apiKey: process.env.NEBIUS_API_KEY,
});

export async function GET() {
  const start = Date.now();
  const completion = await client.chat.completions.create({
    model: "nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B",
    messages: [
      { role: "user", content: "Give me 3 cheap, filling staple foods in one line each." },
    ],
  });
  return NextResponse.json({
    answer: completion.choices[0].message.content,
    ms: Date.now() - start,
  });
}