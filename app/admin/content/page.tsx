import AdminShell from '@/components/AdminShell';
const posts = [
  ['Welcome to Oxford Manor College 2025','Published','2025-01-05'],
  ['Annual Sports Day Celebration','Draft','2025-01-12'],
  ['Science Fair Winners Announced','Published','2025-01-19'],
];
export default function Content(){
  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-semibold">Content Management</div>
        <button className="btn">Create New Post</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((p,i)=>(
          <div key={i} className="card p-0 overflow-hidden">
            <div className="h-36 bg-slate-200"></div>
            <div className="p-4">
              <div className="font-medium">{p[0]}</div>
              <div className="text-xs text-slate-500 mt-1"><span className={p[1]=='Published'?'text-emerald-600':'text-slate-500'}>{p[1]}</span> • {p[2]}</div>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs">Edit</button>
                <button className="px-3 py-1 rounded-md border text-xs">View</button>
                <button className="px-3 py-1 rounded-md bg-red-50 text-red-600 text-xs">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
