import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

function Footer(){
  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="container py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 font-semibold mb-4">
            <div className="h-9 w-9 rounded-full bg-emerald-600"></div>
            Oxford Manor College
          </div>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>Gwarinpa District, Abuja FCT, Nigeria</li>
            <li>+234 (0) 814 992 4087</li>
            <li>info@oxfordmanor.edu.ng</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-4">Resources</div>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>Student Portal</li>
            <li>Staff Portal</li>
            <li>Virtual Tour</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-4">Subscribe</div>
          <form className="mt-4 flex gap-2">
            <input className="flex-1 rounded-md px-3 py-2 text-ink" placeholder="Enter your email"/>
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-sm text-slate-300">&copy; 2025 Oxford Manor College. All rights reserved.</div>
      </div>
    </footer>
  );
}
export const metadata = { title: 'Oxford Manor College', description: 'Excellence in British Education, Abuja' };
export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body className="bg-white text-ink">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
