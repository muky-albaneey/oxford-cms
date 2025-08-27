import AdminShell from '@/components/AdminShell';
const subjects = [['Mathematics',88],['English',82],['Science',90],['History',76],['Geography',84]] as const;
export default function Analytics(){
  return (
    <AdminShell>
      <div className="text-2xl font-semibold mb-4">Analytics Dashboard</div>
      <div className="grid md:grid-cols-4 gap-4">
        {[['Total Students','2,847'],['Active Teachers','156'],['Course Completion','89.5%'],['Average Attendance','94.8%']].map((c,i)=>(
          <div key={i} className="card p-5">
            <div className="text-sm text-slate-500">{c[0]}</div>
            <div className="text-3xl font-semibold mt-1">{c[1]}</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card p-5 md:col-span-2">
          <div className="font-medium mb-3">Student Enrollment Trends</div>
          <div className="grid grid-cols-5 gap-3 items-end h-48">
            {[2800, 3000, 3200, 3100, 3300].map((h,i)=>(<div key={i} className="bg-blue-600/70 rounded" style={{height: (h-2700)/8}} title={String(h)}></div>))}
          </div>
        </div>
        <div className="card p-5">
          <div className="font-medium mb-3">Subject Performance</div>
          <div className="space-y-3">
            {subjects.map((s,i)=>(
              <div key={i}>
                <div className="text-sm mb-1">{s[0]} <span className="float-right">{s[1]}%</span></div>
                <div className="h-2 rounded bg-slate-200"><div className="h-2 rounded bg-emerald-600" style={{width: s[1]+'%'}}></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
