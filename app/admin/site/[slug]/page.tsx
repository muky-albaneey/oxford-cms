'use client';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const fetcher = (u:string)=>fetch(u).then(r=>r.json());

type AnyObj = Record<string, any>;

export default function PageEditor(){
  const { slug } = useParams();
  const { data } = useSWR(`/api/content/${slug}`, fetcher);
  const [jsonText, setJsonText] = useState('');
  const [obj, setObj] = useState<AnyObj>({});
  const [saving, setSaving] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);

  // sync jsonText <-> obj
  useEffect(()=>{ if(data){ const t = JSON.stringify(data, null, 2); setJsonText(t); setObj(data);} },[data]);
  useEffect(()=>{
    try { const parsed = JSON.parse(jsonText); setObj(parsed); } catch {}
  },[jsonText]);

  async function save(){
    setSaving(true);
    const res = await fetch(`/api/content/${slug}`, { method:'POST', body: JSON.stringify(obj) });
    alert(res.ok ? 'Saved!' : 'Invalid JSON');
    if(res.ok){ setJsonText(JSON.stringify(obj, null, 2)); }
    setSaving(false);
  }

  async function upload(file: File): Promise<string|undefined>{
    const fd = new FormData(); fd.append('file', file);
    const res = await fetch('/api/upload', { method:'POST', body: fd });
    const j = await res.json();
    if(j.ok) return j.url as string;
    alert('Upload failed'); return;
  }

  function setNested(path: (string|number)[], value: any){
    const next = structuredClone(obj || {});
    let cur:any = next;
    for(let i=0;i<path.length-1;i++){
      const k:any = path[i];
      if(cur[k]===undefined) cur[k] = typeof path[i+1]==='number' ? [] : {};
      cur = cur[k];
    }
    cur[path[path.length-1] as any] = value;
    setObj(next);
    setJsonText(JSON.stringify(next, null, 2));
  }

  // Renderers per slug
  function ImageRow({label, path, value}:{label:string, path:(string|number)[], value?:string}){
    return (
      <div className="border rounded-lg p-3">
        <div className="text-sm font-medium">{label}</div>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2">
          <input className="border rounded-md px-3 py-2 text-sm" value={value||''} onChange={e=>setNested(path, e.target.value)} placeholder="/uploads/..." />
          <label className="inline-flex items-center justify-center px-3 py-2 rounded-md border cursor-pointer text-sm">
            <input type="file" className="hidden" accept="image/*"
              onChange={async (e)=>{
                const file = e.target.files?.[0];
                if(!file) return;
                const url = await upload(file);
                if(url) setNested(path, url);
              }}/>
            Upload
          </label>
        </div>
        {value ? <div className="mt-2"><img src={value} className="h-28 rounded-md object-cover"/></div>:null}
      </div>
    );
  }

  function ImageForms(){
    const s = String(slug);
    if(s==='home'){
      const exp = obj?.experience ?? [];
      const news = obj?.news ?? [];
      return (
        <div className="space-y-3">
          <ImageRow label="Hero image" path={['hero','image']} value={obj?.hero?.image} />
          <div className="text-sm text-slate-500 pt-1">Experience cards</div>
          {exp.map((it:any,i:number)=>(<ImageRow key={i} label={`Experience [${i}] ${it?.title||''}`} path={['experience',i,'image']} value={it?.image}/>))}
          <div className="text-sm text-slate-500 pt-1">News cards</div>
          {news.map((it:any,i:number)=>(<ImageRow key={i} label={`News [${i}] ${it?.title||''}`} path={['news',i,'image']} value={it?.image}/>))}
        </div>
      );
    }
    if(s==='about'){
      return <ImageRow label="Story image" path={['story','image']} value={obj?.story?.image}/>;
    }
    if(s==='academics'){
      const lv = obj?.levels ?? [];
      return (
        <div className="space-y-3">
          {lv.map((it:any,i:number)=>(<ImageRow key={i} label={`Level [${i}] ${it?.title||''}`} path={['levels',i,'image']} value={it?.image}/>))}
        </div>
      );
    }
    return <div className="text-sm text-slate-500">No image fields on this page.</div>;
  }

  return (
    <div className="container py-6">
      <Link href="/admin" className="text-blue-600">← Back to Admin</Link>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xl font-semibold capitalize">{String(slug)} · Editor</div>
        <a target="_blank" rel="noreferrer" className="btn-outline" href={slug==='home'?`/`:`/${slug}`}>Open Preview</a>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-4">
        {/* JSON */}
        <div className="card p-0 overflow-hidden lg:col-span-2">
          <div className="px-4 py-3 border-b font-medium bg-slate-50">Content (JSON)</div>
          <textarea ref={taRef} className="w-full h-[560px] p-4 font-mono text-sm outline-none" value={jsonText} onChange={e=>setJsonText(e.target.value)} />
        </div>

        {/* Images (per-field) */}
        <div className="card p-4">
          <div className="font-medium mb-2">Images</div>
          <ImageForms />
          <div className="text-xs text-slate-500 mt-3">Tip: You can still edit any other values in the JSON on the left.</div>
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <button className="px-3 py-2 border rounded-md">Cancel</button>
        <button onClick={save} className="px-3 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50" disabled={saving}>{saving?'Saving...':'Save'}</button>
      </div>
    </div>
  );
}
