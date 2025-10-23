'use client';
import { useState } from 'react';
import { readJson } from '@/lib/db';

export default function ContactPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Admission requirements include a completed application form, academic transcripts, recommendation letters, and an entrance examination. International students may need additional documentation.'
    },
    {
      question: 'Do you offer scholarships?',
      answer: 'Yes, we offer merit-based scholarships and financial aid for exceptional students. Please contact our admissions office for more information about eligibility and application procedures.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain a low student-teacher ratio of approximately 15:1, ensuring personalized attention and support for each student.'
    },
    {
      question: 'Do you offer boarding facilities?',
      answer: 'Yes, we offer comprehensive boarding facilities for both male and female students, with modern dormitories, dining facilities, and 24/7 supervision.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-light animate-fade-in-delay">
              Get in Touch with Oxford Manor College – We're Here to Help
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Get in Touch
            </h2>
            <p className="text-slate-600">
              We're here to answer your questions and provide assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-emerald-500">
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-ink mb-2">Phone</h3>
              <p className="text-slate-600 text-sm">+234 (0) 814 992 4087</p>
              <p className="text-slate-600 text-sm">+234 (0) 901 234 5678</p>
            </div>

            {/* Email Card */}
            <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-ink mb-2">Email</h3>
              <p className="text-slate-600 text-sm">admissions@oxfordmanor.edu.ng</p>
              <p className="text-slate-600 text-sm">info@oxfordmanor.edu.ng</p>
            </div>

            {/* Address Card */}
            <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-500">
              <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-ink mb-2">Address</h3>
              <p className="text-slate-600 text-sm">No 9 Magaji Muazu</p>
              <p className="text-slate-600 text-sm">Katampe Extension, Abuja</p>
            </div>

            {/* Office Hours Card */}
            <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-orange-500">
              <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-ink mb-2">Office Hours</h3>
              <p className="text-slate-600 text-sm">Mon - Fri: 8:00 AM - 4:30 PM</p>
              <p className="text-slate-600 text-sm">Sat: 9:00 AM - 1:00 PM</p>
        </div>
      </div>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section className="section bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Send Us a Message
            </h2>
            <p className="text-slate-600">
              We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form className="card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+234 (0) 800 000 0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-ink mb-2">Subject *</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="What is your message about?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-ink mb-2">Message *</label>
                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Department Contacts
            </h2>
            <p className="text-slate-600">
              Contact specific departments for specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Admissions Office', email: 'admissions@oxfordmanor.edu.ng', phone: '+234 (0) 814 992 4087' },
              { name: 'Academic Office', email: 'academics@oxfordmanor.edu.ng', phone: '+234 (0) 814 992 4088' },
              { name: 'Finance Office', email: 'finance@oxfordmanor.edu.ng', phone: '+234 (0) 814 992 4089' },
              { name: 'Student Affairs', email: 'studentaffairs@oxfordmanor.edu.ng', phone: '+234 (0) 814 992 4090' },
              { name: 'General Enquiries', email: 'info@oxfordmanor.edu.ng', phone: '+234 (0) 814 992 4091' }
            ].map((dept, i) => (
              <div key={i} className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-2 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-ink mb-2">{dept.name}</h3>
                    <p className="text-sm text-slate-600 mb-1">{dept.email}</p>
                    <p className="text-sm text-slate-600">{dept.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="section bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Find Us
            </h2>
            <p className="text-slate-600">
              Located in Katampe Extension, Abuja FCT.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d7.5!3d9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOSBNYWdhamkgTXWhYXV6dSBLYXRhbXBlIEV4dGVuc2lvbiwgQWJ1amEhITkvMTAxNzE!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oxford Manor College Location"
              />
            </div>
          </div>

          {/* Google Maps Button */}
          <div className="text-center mb-12">
            <a
              href="https://www.google.com/maps/search/?api=1&query=No+9+Magaji+Muazu+Katampe+Extension+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Open in Google Maps
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Mini Contact Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '📍', title: 'Address', info: 'No 9 Magaji Muazu\nKatampe Extension, Abuja FCT' },
              { icon: '🕐', title: 'Visiting Hours', info: 'Mon-Fri: 9:00 AM - 3:00 PM\nSat: 10:00 AM - 1:00 PM' },
              { icon: '📞', title: 'Call Ahead Info', info: 'Please call ahead for appointments\nand campus tours' }
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 whitespace-pre-line">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Quick answers to common questions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="font-semibold text-lg text-ink pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFAQ === i && (
                  <div className="mt-4 text-slate-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* More Questions Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              More Questions?
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
