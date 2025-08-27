import AdminShell from '@/components/AdminShell';
const users = [
  ['John Smith','Student','Grade 10','Active','2025-01-08'],
  ['Sarah Johnson','Student','Grade 11','Inactive','2025-01-06'],
  ['Michael Brown','Admin','Grade N/A','Active','2025-01-02'],
  ['Emily Davis','Teacher','Grade 7C','Active','2024-12-29'],
  ['Lisa Wilson','Teacher','Grade 9E','Pending','2024-12-28'],
];
export default function Users(){
  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-semibold">User Management</div>
        <button className="btn">Add New User</button>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-500">
            <th className="p-3">User</th><th className="p-3">Role</th><th className="p-3">Class/Department</th><th className="p-3">Status</th><th className="p-3">Last Login</th><th className="p-3">Actions</th>
          </tr></thead>
          <tbody>
          {users.map((u,i)=>(
            <tr key={i} className="border-t">
              <td className="p-3">{u[0]}</td>
              <td className="p-3">{u[1]}</td>
              <td className="p-3">{u[2]}</td>
              <td className="p-3"><span className="chip">{u[3]}</span></td>
              <td className="p-3">{u[4]}</td>
              <td className="p-3 space-x-2"><button className="text-blue-600">✏️</button><button>🔒</button><button className="text-red-600">🗑️</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
