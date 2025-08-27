'use client';
import { useState } from 'react';

const pending = [
  ['Calculus I Midterm','Course: Math 101','Due: Oct 20, 2025'],
  ['Physics Lab Report','Course: PHY 102','Due: Oct 19, 2025'],
];
const allAssignments = [
  ['English Essay','Course: ENG 201','Due: Oct 15, 2025'],
  ['History Project','Course: HIS 205','Due: Sep 30, 2025'],
];

export default function Assignments(){
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Assignment</h2>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white" onClick={()=>setOpen(true)}>Upload New Assignment</button>
      </div>

      <section className="card p-5">
        <div className="font-medium mb-3">Pending Assignments</div>
        <div className="grid md:grid-cols-2 gap-3">
          {pending.map((p,i)=>(
            <div key={i} className="border rounded-lg p-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{p[0]}</div>
                <div className="text-xs text-slate-500">{p[1]}</div>
                <div className="text-xs text-amber-600">{p[2]}</div>
              </div>
              <a className="px-3 py-1 rounded-md border text-sm" href="/staff/submissions/1">View Submissions</a>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <div className="font-medium mb-3">All Assignments</div>
        <div className="space-y-3">
          {allAssignments.map((p,i)=>(
            <div key={i} className="border rounded-lg p-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{p[0]}</div>
                <div className="text-xs text-slate-500">{p[1]}</div>
                <div className="text-xs text-slate-500">{p[2]}</div>
              </div>
              <div className="space-x-2">
                <a className="px-3 py-1 rounded-md border text-sm" href="/staff/submissions/1">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {open && (
        <div>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={()=>setOpen(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl">
              <div className="p-4 border-b font-medium">Upload New Assignment</div>
              <div className="p-4 grid gap-3">
                <div>
                  <div className="text-xs text-slate-500 mb-1">Assignment Title</div>
                  <input className="w-full border rounded-md px-3 py-2" placeholder="e.g., Research Paper - Module A"/>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Select a course</div>
                    <input className="w-full border rounded-md px-3 py-2" placeholder="Course"/>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Due Date</div>
                    <input type="date" className="w-full border rounded-md px-3 py-2"/>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Description</div>
                  <textarea className="w-full border rounded-md px-3 py-2" rows={3} placeholder="Provide a brief description of the assignment..."></textarea>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Upload File</div>
                  <input type="file" className="w-full border rounded-md px-3 py-2"/>
                </div>
              </div>
              <div className="p-4 border-t flex justify-end gap-2">
                <button className="px-3 py-2 rounded-md border" onClick={()=>setOpen(false)}>Cancel</button>
                <button className="px-3 py-2 rounded-md bg-blue-600 text-white">Upload Assignment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
