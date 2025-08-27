'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, ReactNode } from 'react';
import { LayoutDashboard, FileText, PanelLeftOpen, BarChart3, Users2, FolderClosed, MessageSquare, Settings, Search, Bell } from 'lucide-react';
import clsx from 'clsx';

const items = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/page-management', icon: FileText, label: 'Page Management' },
  { href: '/admin/content', icon: PanelLeftOpen, label: 'Content Management' },
  { href: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/admin/users', icon: Users2, label: 'User Management' },
  { href: '/admin/documents', icon: FolderClosed, label: 'Documents' },
  { href: '/admin/message', icon: MessageSquare, label: 'Message' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={close}
        aria-hidden={!open}
      />

      {/* Sidebar */}
      <aside
        id="admin-sidebar"
        className={clsx(
          'fixed left-0 top-0 h-full w-72 md:w-64 bg-slate-900 text-white z-[70] shadow-xl',
          'transform transition-transform duration-300 will-change-transform',
          open ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0' // always visible on md+
        )}
      >
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-emerald-600" />
            <div>
              <div className="font-semibold leading-tight">Oxford Manor</div>
              <div className="text-xs text-white/70">College Abuja</div>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-700" />
            <div>
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-white/60">Super Administrator</div>
            </div>
          </div>
        </div>

        <nav className="px-3 py-3 space-y-1 overflow-y-auto h-[calc(100%-144px)]">
          {items.map((it) => {
            const active = pathname.startsWith(it.href);
            const Icon = it.icon;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20',
                  active && 'bg-blue-600/20 text-white'
                )}
              >
                <Icon size={16} />
                {it.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b md:pl-64">
        <div className="px-4 md:px-6 py-3 flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Toggle sidebar"
            aria-controls="admin-sidebar"
            aria-expanded={open}
            onClick={toggle}
          >
            <PanelLeftOpen size={18} />
          </button>

          {/* Search */}
          <div className="flex-1">
            <div className="text-slate-500 flex items-center gap-2 border rounded-md px-3 py-2 w-full md:w-96">
              <Search size={16} />
              <input className="outline-none w-full text-sm bg-transparent" placeholder="Search..." />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-slate-300">
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button className="px-3 md:px-4 py-2 rounded-md bg-slate-100">Logout</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="p-4 md:p-6 md:pl-64">{children}</main>
    </div>
  );
}
