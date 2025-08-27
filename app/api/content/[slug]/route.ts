import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
import { readJson, writeJson } from '@/lib/db';
function fileFor(slug:string){ return `${slug}.json`; }
export async function GET(_:Request, {params}:{params:{slug:string}}){
  const data = await readJson<any>(fileFor(params.slug), {} as any);
  return NextResponse.json(data);
}
export async function POST(req:Request, {params}:{params:{slug:string}}){
  const body = await req.text();
  try {
    const json = body ? JSON.parse(body) : {};
    await writeJson(fileFor(params.slug), json);
    return NextResponse.json({ok:true});
  } catch (e) {
    return NextResponse.json({ok:false,error:'Invalid JSON'}, {status:400});
  }
}
