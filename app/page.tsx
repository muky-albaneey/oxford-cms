import { readJson } from '@/lib/db';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ValuesStrip from '@/components/ValuesStrip';
import ExperienceGrid from '@/components/ExperienceGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default async function HomePage(){
  const data = await readJson<any>('home.json', {} as any);
  return (
    <div>
      {/* Hero Section */}
      <Hero hero={data?.hero} />

      {/* Feature Cards */}
      <section className="container -mt-10 md:-mt-16 relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.features?.map((it:any, i:number) => (
            <FeatureCard
              key={i}
              icon={it.icon}
              title={it.title}
              description={it.desc}
              action={it.action}
              href={it.href}
            />
          ))}
        </div>
      </section>

      {/* Values Strip */}
      <ValuesStrip values={data.values} />

      {/* Experience Grid */}
      <ExperienceGrid experiences={data.experience} />

      {/* Testimonial Carousel */}
      <TestimonialCarousel testimonials={data.testimonials} />

      {/* Latest News & Events */}
      <section className="section">
        <div className="container px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink text-center mb-8">
            Latest News & Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
