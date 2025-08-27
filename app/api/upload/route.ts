import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request){
  const form = await req.formData();
  const f = form.get('file');
  if(!f || !(f instanceof File)){
    return NextResponse.json({ ok:false, error: 'No file provided' }, { status: 400 });
  }
  const bytes = await f.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploads = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploads, { recursive: true });
  const safeName = `${Date.now()}-${f.name}`.replace(/[^a-zA-Z0-9._-]/g, '_');
  const full = path.join(uploads, safeName);
  await writeFile(full, buffer);
  const url = `/uploads/${safeName}`;
  return NextResponse.json({ ok:true, url });
}
