import { readJson } from '@/lib/db';
import HeroCarousel from '@/components/HeroCarousel';
export default async function HomePage(){
  const data = await readJson<any>('home.json', {} as any);
  return (
    <div>
      {/* <section className={`relative ${data?.hero?.image ? "" : "bg-brand-gradient"}`}>
        {data?.hero?.image && (<div className="absolute inset-0 -z-10"><img src={data.hero.image} className="h-full w-full object-cover" /></div>)}
        <div className="container py-24 md:py-36 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold drop-shadow">{data.hero?.title}</h1>
          <p className="mt-3 md:text-lg text-white/90">{data.hero?.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {data.hero?.badges?.map((b:string,i:number)=>(<span key={i} className="chip bg-white/10 border-white/30 text-white">{b}</span>))}
          </div>
          <div className="mt-8"><a className="btn" href="#experience">{data.hero?.cta}</a></div>
        </div>
      </section> */}
            <HeroCarousel hero={data?.hero} />

      <section className="container -mt-10 md:-mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.features?.map((it:any,i:number)=>(
            <div key={i} className="card p-4 md:p-5">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-slate-600">{it.desc}</div>
              <button className="mt-2 text-sm text-brand-green font-medium hover:underline">{it.action}</button>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10 bg-brand-gray/60">
        <div className="container py-10 grid md:grid-cols-3 gap-6">
          {data.values?.map((v:any,i:number)=>(
            <div key={i} className="card p-6">
              <div className="font-semibold text-brand-green">{v.title}</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc pl-5">
                {v.bullets?.map((b:string,j:number)=>(<li key={j}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section id="experience" className="section">
        <div className="container">
          <h2 className="title-lg text-center">Experience Oxford Manor</h2>
          <p className="subtitle text-center mt-2">Discover what makes Oxford Manor College the premier choice for British curriculum education in Abuja</p>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {data.experience?.map((it:any,i:number)=>(
              <div key={i} className="card overflow-hidden">
                {it.image ? <img src={it.image} className="h-36 w-full object-cover" /> : <div className="h-36 bg-slate-200"></div>}
                <div className="p-4">
                  <div className="font-semibold">{it.title}</div>
                  <p className="text-sm text-slate-600">{it.desc}</p>
                  <button className="mt-3 btn-outline">{it.cta}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-rose-50/40">
        <div className="container">
          <h2 className="title-lg text-center">What Our Community Says</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {data.testimonials?.map((t:any,i:number)=>(
              <div key={i} className="card p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
                <div className="mt-2 text-amber-500">★★★★★</div>
                <p className="mt-2 text-slate-700 text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title-lg text-center">Latest News & Events</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {data.news?.map((it:any,i:number)=>(
              <article key={i} className="card overflow-hidden">
                {it.image ? <img src={it.image} className="h-36 w-full object-cover" /> : <div className="h-36 bg-slate-200"></div>}
                <div className="p-4">
                  <div className="text-xs text-slate-500">{it.date} • <span className="text-emerald-700">{it.tag}</span></div>
                  <h3 className="font-semibold mt-1">{it.title}</h3>
                  <button className="mt-3 btn-outline">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
