'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('Latest Updates');

  const filters = ['Latest Updates', 'Upcoming Events', 'Student Achievements'];

  const featuredNews = [
    {
      id: 1,
      image: '/hero_1.jpeg',
      category: 'Featured',
      title: 'Outstanding IGCSE Results 2025: 98% Pass Rate Achieved',
      date: '10 March, 2025',
      author: 'Admin',
      description: 'We are thrilled to announce that Oxford Manor College achieved a remarkable 98% pass rate in the 2025 IGCSE examinations.',
      href: '#'
    },
    {
      id: 2,
      image: '/hero_2.jpeg',
      category: 'Events',
      title: 'International Cultural Week 2025: Celebrating Global Diversity',
      date: '3 March, 2025',
      author: 'Events Team',
      description: 'Join us for a week-long celebration of cultures from around the world, featuring traditional performances, food, and art.',
      href: '#'
    },
    {
      id: 3,
      image: '/hero_3.jpeg',
      category: 'Academic',
      title: 'UK University Fair 2025: Direct Access to Top Universities',
      date: '28 February, 2025',
      author: 'Admissions',
      description: 'Meet representatives from leading UK universities including Oxford, Cambridge, and Imperial College London.',
      href: '#'
    }
  ];

  const latestNews = [
    {
      id: 1,
      image: '/hero_1.jpeg',
      title: 'New Science Laboratory Complex Opens',
      date: '15 March, 2025',
      author: 'Facilities',
      description: 'Our state-of-the-art science laboratory complex is now open, featuring modern equipment for physics, chemistry, and biology.',
      href: '#'
    },
    {
      id: 2,
      image: '/hero_2.jpeg',
      title: 'Student Leadership Conference 2025',
      date: '12 March, 2025',
      author: 'Student Affairs',
      description: 'Students participated in leadership workshops and networking sessions with industry professionals.',
      href: '#'
    },
    {
      id: 3,
      image: '/hero_3.jpeg',
      title: 'Oxford Manor Wins Inter-School Debate Championship',
      date: '8 March, 2025',
      author: 'Academic',
      description: 'Our debate team secured first place in the regional championship, showcasing exceptional public speaking skills.',
      href: '#'
    },
    {
      id: 4,
      image: '/hero_4.jpeg',
      title: 'Community Service Day: Giving Back to Abuja',
      date: '5 March, 2025',
      author: 'Community',
      description: 'Students and staff volunteered at local organizations, demonstrating our commitment to community engagement.',
      href: '#'
    },
    {
      id: 5,
      image: '/hero_1.jpeg',
      title: 'A-Level Results Celebration',
      date: '2 March, 2025',
      author: 'Academic',
      description: 'Celebrating outstanding A-Level results with students achieving top grades and university placements.',
      href: '#'
    },
    {
      id: 6,
      image: '/hero_2.jpeg',
      title: 'Parent-Teacher Conference: Building Strong Partnerships',
      date: '28 February, 2025',
      author: 'Admin',
      description: 'Successful parent-teacher conference with record attendance, fostering collaboration between home and school.',
      href: '#'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
              News & Events
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-delay">
              Stay Updated with the Latest Happenings at Oxford Manor College
            </p>
            
            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-delay-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-white text-brand-green'
                      : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="section bg-white">
        <div className="container px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-8 text-center">
            Featured News
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((item) => (
              <article key={item.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-ink mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  {/* Date & Author */}
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{item.date}</span>
                    <span className="mx-1">•</span>
                    <span>{item.author}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 hover:gap-3 transition-all duration-200"
                  >
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News List Section */}
      <section className="section bg-gradient-to-b from-slate-50 to-blue-50/30">
        <div className="container px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-8 text-center">
            Latest News
          </h2>
          
          <div className="space-y-6">
            {latestNews.map((item) => (
              <article key={item.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Thumbnail */}
                  <div className="md:col-span-3">
                    <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9 p-6">
                    <h3 className="font-semibold text-xl text-ink mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Date & Author */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{item.date}</span>
                      <span className="mx-1">•</span>
                      <span>{item.author}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-4">
                      {item.description}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 hover:gap-3 transition-all duration-200"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Informed CTA Section */}
      <section className="relative bg-gradient-to-r from-brand-green via-brand-teal to-brand-blue text-white py-20 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter and never miss an update from Oxford Manor College
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
                className="px-8 py-4 bg-white text-brand-green rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
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
