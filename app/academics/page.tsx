import { readJson } from '@/lib/db';
export default async function Academics(){
  const data = await readJson<any>('academics.json', {} as any);
  return (
    <div>
      <div className="bg-brand-gradient text-white">
        <div className="container py-16">
          <h1 className="text-3xl md:text-5xl font-semibold">{data.hero?.title}</h1>
          <p className="mt-2 text-white/90">{data.hero?.subtitle}</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="title-lg">Our Curriculum</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {data.levels?.map((lv:any,i:number)=>(
              <div key={i} className="card overflow-hidden">
                {lv.image ? <img src={lv.image} className="h-32 w-full object-cover" /> : <div className="h-32 bg-slate-200"></div>}
                <div className="p-4"><div className="font-semibold">{lv.title}</div><p className="text-sm text-slate-600">{lv.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-rose-50/40">
        <div className="container">
          <h2 className="title-lg">Subjects</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="card p-6"><div className="font-semibold text-brand-green">Core Subjects</div><ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mt-2">{data.subjects?.core?.map((s:string,i:number)=>(<li key={i}>{s}</li>))}</ul></div>
            <div className="card p-6"><div className="font-semibold text-amber-600">Sciences</div><ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mt-2">{data.subjects?.sciences?.map((s:string,i:number)=>(<li key={i}>{s}</li>))}</ul></div>
            <div className="card p-6"><div className="font-semibold text-blue-700">Arts & Humanities</div><ul className="list-disc pl-5 text-sm text-slate-600 space-y-1 mt-2">{data.subjects?.arts?.map((s:string,i:number)=>(<li key={i}>{s}</li>))}</ul></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title-lg">Meet Our Faculty</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {data.faculty?.map((n:string,i:number)=>(
              <div key={i} className="card p-6 text-center"><div className="h-16 w-16 rounded-full bg-slate-300 mx-auto"></div><div className="font-semibold mt-3">{n}</div><div className="text-sm text-slate-500">Experienced educator</div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title-lg">Academic Calendar</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {data.calendar?.map((t:string,i:number)=>(<div key={i} className="card p-6"><div className="font-semibold">{t}</div><ul className="list-disc pl-5 text-sm text-slate-600 mt-2 space-y-1"><li>Mid-Term Break</li><li>Exam Week</li><li>PTA Meeting</li></ul></div>))}
          </div>
        </div>
      </section>
    </div>
  );
}
