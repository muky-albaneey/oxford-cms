import AdminShell from '@/components/AdminShell';
const recent = [
  ['Chemistry Lab Report.pdf','PDF','2.3 MB','2 hours ago'],
  ['Physics Video Lecture.mp4','Video','156 MB','1 day ago'],
  ['Mathematics Practice Set.docx','Document','1.1 MB','3 days ago'],
  ['Biology Diagrams.zip','Archive','45 MB','1 week ago'],
];
export default function Documents(){
  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-semibold">Document Repository</div>
        <div className="space-x-2">
          <button className="btn">Upload Files</button>
          <button className="btn-outline">New Folder</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          ['Lecture Notes','23 files',[['Mathematics Chapter 1'],['English Literature Notes']]],
          ['Media Files','15 files',[['Physics Lab Demo'],['School Event Photos']]],
          ['Study Materials','31 files',[['Biology Presentation'],['Chemistry Data Sheet']]],
        ].map((f,i)=>(
          <div key={i} className="card p-4">
            <div className="font-medium">{f[0]} <span className="text-xs text-slate-500 ml-1">{f[1]}</span></div>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              {(f[2] as any).map((it:any,idx:number)=>(<li key={idx}>• {it[0]}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="card mt-6">
        <div className="p-4 font-medium border-b">Recent Uploads</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-slate-500">
              <th className="p-3">File Name</th><th className="p-3">Type</th><th className="p-3">Size</th><th className="p-3">Uploaded</th><th className="p-3">Actions</th>
            </tr></thead>
            <tbody>
              {recent.map((r,i)=>(
                <tr key={i} className="border-t">
                  <td className="p-3">{r[0]}</td><td className="p-3">{r[1]}</td><td className="p-3">{r[2]}</td><td className="p-3">{r[3]}</td>
                  <td className="p-3 space-x-2"><button>⬇️</button><button className="text-blue-600">🔗</button><button className="text-red-600">🗑️</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
