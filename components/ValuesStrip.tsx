type Value = {
  icon: string;
  title: string;
  description: string;
};

type ValuesStripProps = {
  values: Value[];
};

const ValueIcons: Record<string, JSX.Element> = {
  respect: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  scholarship: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  resilience: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const IconColors = {
  respect: {
    bg: 'bg-emerald-100',
    icon: 'text-emerald-600',
  },
  scholarship: {
    bg: 'bg-amber-100',
    icon: 'text-amber-600',
  },
  resilience: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
  },
};

export default function ValuesStrip({ values }: ValuesStripProps) {
  return (
    <section className="bg-rose-50/40 py-12 md:py-16">
      <div className="container px-4">
        <div className="bg-white rounded-3xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => {
              const IconComponent = ValueIcons[value.icon] || ValueIcons.respect;
              const colors = IconColors[value.icon as keyof typeof IconColors] || IconColors.respect;

              return (
                <div key={index} className="flex flex-col items-center text-center animate-fade-in">
                  {/* Icon Circle */}
                  <div className={`${colors.bg} ${colors.icon} rounded-full p-4 mb-4 shadow-md`}>
                    {IconComponent}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-ink mb-2">{value.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

