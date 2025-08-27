'use client';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock scroll (and horizontal overflow) when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflowX = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflowX = '';
    };
  }, [open]);

  // Close on route change
  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const close = useCallback(() => setOpen(false), []);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="container py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-9 w-9 rounded-full overflow-hidden bg-white ring-1 ring-emerald-50">
              <Image
                src="/omcLogo.jpeg"
                alt="Oxford Manor College logo"
                fill
                className="object-contain p-1"
                priority
              />
            </span>
            <div className="font-semibold">Oxford Manor College</div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/academics">Academics</Link>
            <Link href="/news">News</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link className="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-white font-semibold hover:opacity-90 transition" href="/auth/signin">Sign In</Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-emerald-600 text-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-50 transition" href="/admin">Admin</Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-emerald-600 text-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-50 transition" href="/staff">Staff</Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-white font-semibold hover:opacity-90 transition" href="/student">student</Link>

          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border"
            onClick={() => setOpen(true)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER (sibling to header, not a child) */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${open ? '' : 'pointer-events-none'}`}
        style={{ overflow: 'hidden' }}  // prevents off-canvas width from causing horizontal scroll
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 z-[100] bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={close}
          aria-hidden={!open}
        />

        {/* Right drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 z-[110] h-full w-72 max-w-[90vw] bg-white border-l shadow-2xl
                      transform transition-transform duration-300 will-change-transform
                      ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4 border-b flex items-center justify-between bg-white">
            <div className="font-semibold">Menu</div>
            <button aria-label="Close" onClick={close} className="p-2 rounded-md border">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav in case items exceed viewport height */}
          <nav className="p-4 space-y-2 bg-white overflow-y-auto">
            <Link href="/" onClick={close} className="block rounded-md px-2 py-2 hover:bg-slate-50">Home</Link>
            <Link href="/about" onClick={close} className="block rounded-md px-2 py-2 hover:bg-slate-50">About Us</Link>
            <Link href="/academics" onClick={close} className="block rounded-md px-2 py-2 hover:bg-slate-50">Academics</Link>
            <Link href="/news" onClick={close} className="block rounded-md px-2 py-2 hover:bg-slate-50">News</Link>
            <Link href="/admissions" onClick={close} className="block rounded-md px-2 py-2 hover:bg-slate-50">Admissions</Link>
            <Link href="/contact" onClick={close} className="block rounded-md px-2 py-2 hover:bg-slate-50">Contact</Link>

            <div className="pt-3 space-y-2">
              <Link href="/auth/signin" onClick={close} className="block text-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-white font-semibold hover:opacity-90 transition">Sign In</Link>
              <Link href="/admin" onClick={close} className="block text-center rounded-md border border-emerald-600 text-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-50 transition">Admin</Link>
              <Link href="/staff" onClick={close} className="block text-center rounded-md border border-emerald-600 text-emerald-700 px-4 py-2 font-semibold hover:bg-emerald-50 transition">Staff</Link>
              <Link href="/student" onClick={close} className="block text-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-white font-semibold hover:opacity-90 transition">student</Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
