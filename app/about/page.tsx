import { readJson } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

export default async function About(){
  const data = await readJson<any>('about.json', {} as any);
  
  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
              {data.hero?.title || 'About Oxford Manor College'}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-delay">
              {data.hero?.subtitle || 'Nurturing Excellence, Building Character, Inspiring Futures'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-delay-2">
              {data.hero?.tags?.map((tag:string, i:number) => (
                <span key={i} className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values Cards */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.missionVision?.map((item:any, i:number) => (
              <div key={i} className="card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${item.iconColor} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
                Our Story
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-brand-green mb-6">
                Founded on Excellence
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {data.story?.paragraphs?.map((p:string, i:number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {data.story?.stats?.map((stat:any, i:number) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              {data.story?.image ? (
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={data.story.image}
                    alt="Oxford Manor College"
                    width={600}
                    height={800}
                    className="object-cover w-full h-auto"
                  />
                  {data.story?.yearBadge && (
                    <div className="absolute bottom-4 right-4 bg-brand-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {data.story.yearBadge}
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  <div className="text-slate-400 text-center">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Our Story Image</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Our Core Values
            </h2>
            <p className="text-slate-600">
              These principles guide everything we do at Oxford Manor College
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.values?.map((value:any, i:number) => (
              <div key={i} className="card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${value.iconColor} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-ink mb-4 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{value.description}</p>
                <ul className="space-y-2">
                  {value.bullets?.map((bullet:string, j:number) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Partnerships */}
      <section className="section bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Accreditations & Partnerships
            </h2>
            <p className="text-slate-600">
              Recognized by leading international bodies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.accreditations?.map((item:any, i:number) => (
              <div key={i} className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${item.iconColor} rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Leadership Team
            </h2>
            <p className="text-slate-600">
              Experienced educators dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.leadership?.map((member:any, i:number) => (
              <div key={i} className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {member.image ? (
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-emerald-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="font-semibold text-lg text-ink mb-1">{member.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{member.title}</p>
                <p className="text-sm text-slate-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Join the Oxford Manor Family
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {data.cta?.text || 'Experience excellence in British education. Apply now and become part of our thriving community.'}
            </p>
            <Link
              href={data.cta?.href || '/admissions'}
              className="inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {data.cta?.buttonText || 'Apply Now'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
