import { NextResponse } from 'next/server';
import { Ollama } from 'ollama';

const ollama = new Ollama({ host: "https://ollama.tcm-bd.com" });

export async function POST(req: Request) {
  // Set CORS headers
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  // Parse request body
  const { message } = await req.json();

  try {
    const response = await ollama.chat({
      model: "llama3.2:1b",
      messages: [{ role: "user", content: message }],
    });

    if (response.done) {
      return NextResponse.json({ message: response.message.content }, { headers, status: 200 });
    } else {
      return NextResponse.json({ error: "Incomplete response" }, { headers, status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { headers, status: 500 });
  }
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return NextResponse.json(null, {
    status: 200,
    headers,
  });
}
