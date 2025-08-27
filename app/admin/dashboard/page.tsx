import AdminShell from '@/components/AdminShell';
export default function Dashboard(){
  return (
    <AdminShell>
      <div className="text-2xl font-semibold mb-4">Dashboard Overview</div>
      <div className="grid md:grid-cols-4 gap-4">
        {[
          ['Total Page Visits','12,847','+12% from last month'],
          ['Today\'s Clicks','2,341','+8% from last month'],
          ['Active Users','1,234','+15% from last month'],
          ['New Posts','23','+5% from last month'],
        ].map((c,i)=>(
          <div key={i} className="card p-5">
            <div className="text-sm text-slate-500">{c[0]}</div>
            <div className="text-3xl font-semibold mt-1">{c[1]}</div>
            <div className="text-xs text-emerald-600 mt-1">{c[2]}</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card p-5 md:col-span-2">
          <div className="font-medium mb-3">Quick Actions</div>
          <div className="grid md:grid-cols-3 gap-4">
            {[['Create New Post'],['Edit Homepage'],['View Analytics']].map((a,i)=>(
              <button key={i} className="rounded-xl border py-6 hover:bg-slate-50"> {a[0]} </button>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <div className="font-medium mb-3">Recent Activity</div>
          <div className="space-y-3 text-sm">
            {['Homepage updated','New post published','About page modified','Media files uploaded'].map((t,i)=>(
              <div key={i} className="border rounded-lg p-3">{t}<div className="text-xs text-slate-500">by Admin User • {i*2+2} hours ago</div></div>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
