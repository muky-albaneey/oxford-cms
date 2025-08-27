import AdminShell from '@/components/AdminShell';
export default function Message(){
  return (
    <AdminShell>
      <div className="text-2xl font-semibold mb-4">Send Message</div>
      <div className="grid md:grid-cols-[280px,1fr] gap-4">
        <aside className="card p-4 space-y-4">
          <div><div className="text-xs text-slate-500">Total Staff</div><div className="text-2xl font-semibold">156</div></div>
          <div><div className="text-xs text-slate-500">Total Students</div><div className="text-2xl font-semibold">2,847</div></div>
          <div><div className="text-xs text-slate-500">Messages Sent</div><div className="text-2xl font-semibold">89</div></div>
          <div className="pt-2 border-t">
            <div className="text-sm font-medium mb-2">Recent Messages</div>
            <ul className="space-y-2 text-sm">
              {['Welcome Back - New Semester','Staff Meeting Reminder','Exam Schedule Update','Holiday Notice'].map((m,i)=>(<li key={i} className="p-2 rounded hover:bg-slate-50 cursor-pointer">• {m}</li>))}
            </ul>
          </div>
        </aside>
        <div className="card p-4">
          <div className="grid gap-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div><div className="text-xs text-slate-500 mb-1">Recipients</div><input className="w-full border rounded-md px-3 py-2" placeholder="All staff & students" /></div>
              <div><div className="text-xs text-slate-500 mb-1">Subject</div><input className="w-full border rounded-md px-3 py-2" placeholder="Enter message subject..." /></div>
            </div>
            <div><div className="text-xs text-slate-500 mb-1">Message</div><textarea className="w-full border rounded-md px-3 py-2" rows={8} placeholder="Type your message here..."></textarea></div>
            <div className="flex items-center justify-between">
              <div><button className="px-3 py-2 rounded-md border">Add Attachment</button></div>
              <div className="space-x-2">
                <button className="px-3 py-2 rounded-md border">Save Draft</button>
                <button className="px-3 py-2 rounded-md bg-blue-600 text-white">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
