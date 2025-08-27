'use client';
import { useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/news', label: 'News & Events' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Menu"
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded hover:bg-slate-100"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            className="absolute inset-y-0 left-0 w-80 bg-white p-5 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="font-bold">Oxford Manor College</div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded hover:bg-slate-100"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 grid gap-2 text-slate-700">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded hover:bg-slate-100"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/auth/signin"
                onClick={() => setOpen(false)}
                className="btn btn-emerald mt-3"
              >
                Sign in
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
