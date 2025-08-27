import { readJson } from '@/lib/db';
export default async function About(){
  const data = await readJson<any>('about.json', {} as any);
  return (
    <div>
      <div className="bg-brand-gradient text-white">
        <div className="container py-16">
          <h1 className="text-3xl md:text-5xl font-semibold">{data.hero?.title}</h1>
          <div className="mt-3 flex gap-3 flex-wrap">
            {data.hero?.tags?.map((t:string,i:number)=>(<span key={i} className="chip bg-white/10 border-white/30 text-white">{t}</span>))}
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <p className="text-slate-700">{data.story?.text}</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {data.story?.stats?.map((s:any,i:number)=>(
                <div key={i}><div className="text-2xl font-semibold">{s.value}</div><div className="text-xs text-slate-500">{s.label}</div></div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            {data.story?.image ? <img src={data.story.image} className="rounded-2xl overflow-hidden shadow-soft h-80 w-full object-cover" /> : <div className="rounded-2xl overflow-hidden shadow-soft h-80 bg-slate-200"></div>}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title-lg">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {data.values?.map((v:string,i:number)=>(
              <div key={i} className="card p-6">
                <div className="font-semibold text-brand-green">{v}</div>
                <ul className="list-disc mt-2 text-sm text-slate-600 pl-5 space-y-1">
                  <li>Guiding everything we do</li><li>Character development</li><li>Critical thinking</li><li>Global citizenship</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title-lg">Accreditations & Partnerships</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-4">
            {data.accreditations?.map((v:string,i:number)=>(
              <div key={i} className="card p-6 text-center">
                <div className="h-10 w-10 rounded-full bg-emerald-50 mx-auto"></div>
                <div className="font-medium mt-3">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
