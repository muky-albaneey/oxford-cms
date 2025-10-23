import Image from 'next/image';
import Link from 'next/link';

export default function AcademicsPage() {
  const levels = [
    {
      title: 'Early Years',
      description: 'Laying strong foundations for lifelong learning through play-based learning and exploration.',
      image: '/hero_1.jpeg'
    },
    {
      title: 'Primary School',
      description: 'Core literacy, numeracy, and science skills development with engaging curriculum.',
      image: '/hero_2.jpeg'
    },
    {
      title: 'Junior Secondary School',
      description: 'Expanding knowledge through critical thinking and comprehensive subject coverage.',
      image: '/hero_3.jpeg'
    },
    {
      title: 'Senior Secondary',
      description: 'IGCSE & A-Levels preparation for university entry and academic excellence.',
      image: '/hero_4.jpeg'
    }
  ];

  const subjects = [
    {
      category: 'Core Subjects',
      borderColor: 'border-emerald-500',
      iconColor: 'bg-emerald-100 text-emerald-600',
      icon: '✓',
      items: ['English Language', 'Mathematics', 'Basic Science', 'Social Studies', 'Computer Studies']
    },
    {
      category: 'Sciences',
      borderColor: 'border-orange-500',
      iconColor: 'bg-orange-100 text-orange-600',
      icon: '🧪',
      items: ['Physics', 'Chemistry', 'Biology', 'Agricultural Science', 'Further Mathematics']
    },
    {
      category: 'Arts & Humanities',
      borderColor: 'border-blue-500',
      iconColor: 'bg-blue-100 text-blue-600',
      icon: '📚',
      items: ['History', 'Literature in English', 'Fine Arts', 'Civic Education', 'Religious Studies']
    }
  ];

  const faculty = [
    {
      name: 'Dr. Margaret Thompson',
      title: 'Head of Academics',
      department: 'Academic Department',
      bio: 'With over 20 years of experience in British education, specializing in curriculum development.',
      image: null
    },
    {
      name: 'Mr. James Wilson',
      title: 'Head of Sciences',
      department: 'Science Department',
      bio: 'Expert in STEM education with a passion for inspiring young scientists and innovators.',
      image: null
    },
    {
      name: 'Mrs. Sarah Ahmed',
      title: 'Head of Languages',
      department: 'Languages Department',
      bio: 'Dedicated to fostering language proficiency and cultural understanding among students.',
      image: null
    }
  ];

  const calendar = [
    {
      title: 'Key Academic Dates',
      items: [
        'Academic Year Start: September 4, 2025',
        'Mid-Term Break: October 23-27, 2025',
        'End of Term 1: December 13, 2025',
        'Term 2 Start: January 8, 2026'
      ]
    },
    {
      title: 'Term 1',
      items: [
        'Start Date: September 4, 2025',
        'Mid-Term Break: October 23-27, 2025',
        'End of Term: December 13, 2025',
        'Holiday: December 14 - January 7'
      ]
    },
    {
      title: 'Term 2',
      items: [
        'Start Date: January 8, 2026',
        'Mid-Term Break: February 12-16, 2026',
        'IGCSE Exams: April 15 - May 20, 2026',
        'End of Term: June 30, 2026'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
              Academic Excellence at Oxford Manor
            </h1>
            <p className="text-xl md:text-2xl font-light animate-fade-in-delay">
              Your journey to knowledge starts here
            </p>
          </div>
        </div>
      </section>

      {/* Our Curriculum Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Our Curriculum
            </h2>
            <p className="text-slate-600">
              Oxford Manor College follows the British curriculum, providing a rigorous and comprehensive education that prepares students for success in international examinations and university studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, i) => (
              <div key={i} className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={level.image}
                    alt={level.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-ink mb-2">{level.title}</h3>
                  <p className="text-slate-600 text-sm">{level.description}</p>
      </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="section bg-rose-50/40">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Subjects
            </h2>
            <p className="text-slate-600">
              Diverse Subjects, Tailored to Every Learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {subjects.map((subject, i) => (
              <div key={i} className={`card p-6 border-l-4 ${subject.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${subject.iconColor} rounded-full p-2`}>
                    <span className="text-2xl">{subject.icon}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-ink">{subject.category}</h3>
                </div>
                <ul className="space-y-2">
                  {subject.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Download Full Subject List
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Meet Our Faculty Section */}
      <section className="section bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Meet Our Faculty
            </h2>
            <p className="text-slate-600">
              Experienced, Passionate, and Committed to Your Child's Success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, i) => (
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
                <p className="text-xs text-slate-600 mb-2">{member.department}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="section bg-pink-50/40">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Academic Calendar
            </h2>
            <p className="text-slate-600">
              Stay informed with key term dates and academic milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {calendar.map((term, i) => (
              <div key={i} className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="font-semibold text-lg text-ink mb-4">{term.title}</h3>
                <ul className="space-y-2">
                  {term.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download Calendar Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Download 2025–26 Academic Calendar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Oxford Manor?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Discover how Oxford Manor College can nurture your child's academic and personal growth.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Apply Now
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
