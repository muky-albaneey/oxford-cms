import { readJson } from '@/lib/db';
export default async function Contact(){
  const data = await readJson<any>('contact.json', {} as any);
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
          <h2 className="title-lg">Get in Touch</h2>
        </div>
        <div className="container grid md:grid-cols-4 gap-6 mt-4">
          {data.info?.map((it:any,i:number)=>(
            <div key={i} className="card p-6"><div className="font-semibold">{it[0]}</div><div className="text-slate-600">{it[1]}</div></div>
          ))}
        </div>
      </section>
      <section className="section bg-brand-gray/60">
        <div className="container">
          <h2 className="title-lg">Send Us a Message</h2>
          <form className="card p-6 mt-4 grid md:grid-cols-2 gap-4 max-w-3xl">
            <input className="rounded-md border px-3 py-2" placeholder="Full Name *"/>
            <input className="rounded-md border px-3 py-2" placeholder="Email Address *"/>
            <input className="rounded-md border px-3 py-2" placeholder="Phone Number"/>
            <input className="rounded-md border px-3 py-2" placeholder="Subject"/>
            <textarea className="md:col-span-2 rounded-md border px-3 py-2" rows={4} placeholder="Message *"/>
            <div className="md:col-span-2"><button className="btn">Send Message</button></div>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title-lg">Department Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {data.departments?.map((d:any,i:number)=>(
              <div key={i} className="card p-6">
                <div className="font-semibold">{d[0]}</div>
                <div className="text-sm text-slate-600">{d[1]}</div>
                <div className="text-sm text-slate-600">{d[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
