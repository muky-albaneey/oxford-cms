import AdminShell from '@/components/AdminShell';
const rows = [
  ['Homepage','Active','2 hours ago','5,420'],
  ['About Us','Active','1 day ago','2,130'],
  ['Academics','Active','3 days ago','3,240'],
  ['Admissions','Active','1 week ago','4,560'],
  ['Contact','Active','2 days ago','1,890'],
];
export default function PageManagement(){
  return (
    <AdminShell>
      <div className="text-2xl font-semibold mb-4">Page management</div>
      <div className="card">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-medium">Website Pages</div>
          <button className="btn">Add New Page</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-slate-500">
              <th className="p-3">Page Name</th><th className="p-3">Status</th><th className="p-3">Last Modified</th><th className="p-3">Visits</th><th className="p-3">Actions</th>
            </tr></thead>
            <tbody>
              {rows.map((r,i)=>(
                <tr key={i} className="border-t">
                  <td className="p-3">{r[0]}</td>
                  <td className="p-3"><span className="chip border-emerald-200 text-emerald-700 bg-emerald-50">Active</span></td>
                  <td className="p-3">{r[2]}</td>
                  <td className="p-3">{r[3]}</td>
                  <td className="p-3 space-x-3"><button className="text-blue-600">Edit</button><button>👁️</button><button className="text-red-600">🗑️</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
