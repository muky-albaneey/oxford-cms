import Link from 'next/link';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  action: string;
  href?: string;
};

const FeatureIcons: Record<string, JSX.Element> = {
  admissions: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  ),
  curriculum: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  fees: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  news: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
};

const IconColors = {
  admissions: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
  },
  curriculum: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'border-orange-200',
    text: 'text-orange-700',
  },
  fees: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'border-blue-200',
    text: 'text-blue-700',
  },
  news: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200',
    text: 'text-purple-700',
  },
};

export default function FeatureCard({ icon, title, description, action, href = '#' }: FeatureCardProps) {
  const IconComponent = FeatureIcons[icon] || FeatureIcons.admissions;
  const colors = IconColors[icon as keyof typeof IconColors] || IconColors.admissions;

  return (
    <div
      className={`${colors.bg} ${colors.border} rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
    >
      {/* Icon */}
      <div className={`${colors.icon} inline-flex items-center justify-center rounded-full p-3 mb-4`}>
        {IconComponent}
      </div>

      {/* Title */}
      <h3 className={`${colors.text} font-semibold text-xl mb-2`}>{title}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4">{description}</p>

      {/* Action Link */}
      <Link
        href={href}
        className={`group inline-flex items-center gap-1 ${colors.text} text-sm font-medium hover:gap-2 transition-all duration-200`}
      >
        {action}
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

