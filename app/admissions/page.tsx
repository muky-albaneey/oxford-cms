export default function AdmissionsPage() {
  const processSteps = [
    {
      icon: '👤',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Choose Program',
      description: 'Explore our programs and find the one that fits your goals.',
      borderColor: 'border-blue-300'
    },
    {
      icon: '📄',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Submit Document',
      description: 'Upload your transcripts, resume, and other required materials.',
      borderColor: 'border-orange-300'
    },
    {
      icon: '💬',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Interview',
      description: 'Prepare for a short interview to discuss your goals and fit.',
      borderColor: 'border-blue-300'
    },
    {
      icon: '🎓',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Admission Decision',
      description: "We'll notify you of your admission status via email.",
      borderColor: 'border-purple-300'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🛡️',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Accredited Programs',
      description: 'Our programs are accredited by national and international bodies, meaning your degree is recognized and respected worldwide.'
    },
    {
      icon: '👥',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Experienced Faculty',
      description: 'Learn from passionate educators and industry experts who bring real-world experience into the classroom.'
    },
    {
      icon: '🎓',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Scholarships Available',
      description: 'We offer merit-based and need-based scholarships to make quality education accessible to all.'
    },
    {
      icon: '🌍',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      title: 'Global Alumni Network',
      description: 'Join a thriving community of graduates making an impact across industries and continents.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-green text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
              Join Oxford Manor College
            </h1>
            <p className="text-xl md:text-2xl font-light animate-fade-in-delay">
              Empowering Future Leaders Through Excellence in Education
            </p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className={`card p-6 border-l-4 ${step.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                <div className={`${step.iconBg} ${step.iconColor} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-semibold text-lg text-ink mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Why Choose Us
            </h2>
            <p className="text-slate-600">
              Discover what sets Oxford Manor College apart.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className={`${item.iconBg} ${item.iconColor} rounded-full p-3 flex-shrink-0`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-ink mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Informed Newsletter Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter to receive the latest news, events, and updates from Oxford Manor College
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-ink font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
