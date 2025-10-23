import Image from 'next/image';
import Link from 'next/link';

type ExperienceCard = {
  image?: string;
  tag: string;
  title: string;
  description: string;
  cta: string;
  href?: string;
};

type ExperienceGridProps = {
  experiences: ExperienceCard[];
};

export default function ExperienceGrid({ experiences }: ExperienceGridProps) {
  return (
    <section className="section">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            Experience Oxford Manor
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover what makes Oxford Manor College the premier choice for British curriculum education in Abuja
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              {exp.image ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-emerald-50 to-blue-50" />
              )}

              {/* Content */}
              <div className="p-5">
                {/* Tag */}
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
                  {exp.tag}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-ink mb-2">{exp.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{exp.description}</p>

                {/* CTA */}
                <Link
                  href={exp.href || '#'}
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:gap-2 transition-all duration-200"
                >
                  {exp.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

