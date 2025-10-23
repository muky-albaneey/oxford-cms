'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ReactNode } from 'react';

const tabs = [
  {href:'/student', label:'Dashboard'},
  {href:'/student/subjects', label:'Subjects'},
  {href:'/student/results', label:'Results'},
  {href:'/student/calendar', label:'Calendar'},
  {href:'/student/upload', label:'Upload'},
  {href:'/student/profile', label:'Profile'},
];


// function Nav(){
//   return (
//     <div className="bg-white border-b">
//       <div className="container h-16 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-full bg-emerald-700"></div>
//           <div className="font-semibold">Oxford Manor College</div>
//         </div>
//         <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
//           <Link href="/">Home</Link>
//           <Link href="/about">About Us</Link>
//           <Link href="/admissions">Admissions</Link>
//           <Link href="/academics">Academics</Link>
//           <Link href="/news">News & Event</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>
//         <Link href="/student/signin" className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm">Sign in</Link>
//       </div>
//     </div>
//   );
// }

export default function StudentShell({children}:{children:ReactNode}){
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f7ee] via-white to-[#e8f1ff]">
     
      {/* <Nav/> */}
      <div className="container py-8">
        <div>
          <div className="text-2xl md:text-[28px] font-extrabold text-slate-900">Student Portal</div>
          <div className="text-slate-600">Welcome back, John Doe</div>
          <div className="flex items-center gap-2 mt-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">SS2 Science Class</span>
            <span className="px-2 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">Student ID: OMC2024001</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-5">
          <div className="card p-4">
            <div className="text-xs text-slate-500">Current Average</div>
            <div className="text-3xl font-extrabold text-emerald-700">82%</div>
          </div>
          <div className="card p-4">
            <div className="text-xs text-slate-500">Subjects</div>
            <div className="text-3xl font-extrabold text-blue-700">7</div>
          </div>
          <div className="card p-4">
            <div className="text-xs text-slate-500">Attendance</div>
            <div className="text-3xl font-extrabold text-purple-700">94%</div>
          </div>
        </div>

        <div className="mt-5 border-b">
          <div className="flex gap-2">
            {tabs.map(t => {
              const active = pathname === t.href;
              return (
                <Link key={t.href} href={t.href}
                  className={clsx("px-4 py-2 rounded-t-md text-sm",
                    active ? "bg-white border-x border-t -mb-px border-b-white" : "text-slate-600 hover:text-slate-900"
                  )}>
                  {t.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
