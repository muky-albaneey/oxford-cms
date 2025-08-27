import { promises as fs } from 'fs';
import path from 'path';
const dataDir = path.join(process.cwd(), 'data');
async function ensure(){ try{ await fs.mkdir(dataDir,{recursive:true}); }catch{} }
export async function readJson<T>(file:string, fallback:T): Promise<T>{
  await ensure();
  const p = path.join(dataDir,file);
  try { return JSON.parse(await fs.readFile(p,'utf8')); }
  catch { await fs.writeFile(p, JSON.stringify(fallback,null,2)); return fallback; }
}
export async function writeJson<T>(file:string, data:T){
  await ensure();
  const p = path.join(dataDir,file);
  await fs.writeFile(p, JSON.stringify(data,null,2));
}
