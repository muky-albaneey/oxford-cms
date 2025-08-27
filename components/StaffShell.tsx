'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, ReactNode } from 'react';
import clsx from 'clsx';

const navItems = [
  { href: '/staff', label: 'Dashboard', icon: '🏠' },
  { href: '/staff/profile', label: 'Profile', icon: '👤' },
  { href: '/staff/assignments', label: 'Assignments', icon: '📄' },
  { href: '/staff/messaging', label: 'Messaging', icon: '💬' },
  { href: '/staff/calendar', label: 'Calendar', icon: '🗓️' },
  { href: '/staff/announcements', label: 'Announcements', icon: '📣' },
  { href: '/staff/notifications', label: 'Notifications', icon: '🔔' },
  { href: '/staff/grades', label: 'Grades', icon: '📝' },
  { href: '/staff/appointments', label: 'Appointments', icon: '📅' },
];

export default function StaffShell({children}:{children:ReactNode}){
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(()=>{ document.body.style.overflow = open ? 'hidden' : ''; return ()=>{document.body.style.overflow='';}; },[open]);
  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-[#0f2a5f] text-white w-60">
      <div className="px-4 py-4 text-sm border-b border-white/10">Oxford Manor College</div>
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map(it => (
          <Link key={it.href} href={it.href}
            className={clsx('flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10',
             pathname===it.href && 'bg-white/10')}>
            <span>{it.icon}</span><span>{it.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-3 border-t border-white/10 flex items-center gap-2">
        <div className="h-9 w-9 rounded-full bg-slate-300"></div>
        <div>
          <div className="text-sm">John Doe</div>
          <div className="text-xs text-white/70">Staff Member</div>
        </div>
      </div>
    </aside>
  );
  return (
    <div className="relative">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-md border" onClick={()=>setOpen(true)} aria-label="Open menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="hidden md:block">
          <input className="border rounded-md px-3 py-2 w-72" placeholder="Search..." />
        </div>
      </div>

      <div className="container grid md:grid-cols-[240px,1fr] gap-6">
        <div className="hidden md:block">
          <div className="sticky top-24 h-[calc(100vh-9rem)]">
            <Sidebar />
          </div>
        </div>
        <div className="min-h-[60vh]">
          {children}
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/40" onClick={()=>setOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-64 translate-x-0 bg-[#0f2a5f] text-white shadow-2xl">
            <div className="flex justify-between items-center p-3 border-b border-white/10">
              <div className="font-medium">Staff Menu</div>
              <button onClick={()=>setOpen(false)} className="p-2 rounded-md border border-white/20" aria-label="Close">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M6 6l12 12M18 6l-12 12"/></svg>
              </button>
            </div>
            <div className="h-[calc(100%-56px)] overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
