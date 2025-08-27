import { readJson } from '@/lib/db';
export default async function Admissions(){
  const data = await readJson<any>('admissions.json', {} as any);
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
          <h2 className="title-lg text-center">Application Steps</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {data.steps?.map((s:string,i:number)=>(<div key={i} className="card p-6 text-center"><div className="text-4xl mb-2">{i+1}</div><div className="font-medium">{s}</div></div>))}
          </div>
          <div className="text-center mt-8"><a className="btn">{data.cta}</a></div>
        </div>
      </section>
    </div>
  );
}
