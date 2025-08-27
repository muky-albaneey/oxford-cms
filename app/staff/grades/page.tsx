export default function Grades(){
  const rows = [
    ['Calculus I','Alice Smith','Midterm Exam','92%','2025-10-20'],
    ['English Literature I','Bob Johnson','Essay 1','88%','2025-10-18'],
    ['Physics Fundamentals','Charlie Brown','Lab Report 3','86%','2025-10-15'],
    ['World History','Diana Prince','Quiz 2','A','2025-10-10'],
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Grade</h2>
        <div className="space-x-2">
          <input className="border rounded-md px-3 py-2" placeholder="Search..." />
          <button className="px-3 py-2 rounded-md border">Download PDF</button>
        </div>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-500">
            <th className="p-3">Course</th><th className="p-3">Student</th><th className="p-3">Assignment</th><th className="p-3">Grade</th><th className="p-3">Date</th><th className="p-3">Actions</th>
          </tr></thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} className="border-t">
                <td className="p-3">{r[0]}</td><td className="p-3">{r[1]}</td><td className="p-3">{r[2]}</td><td className="p-3">{r[3]}</td><td className="p-3">{r[4]}</td>
                <td className="p-3 space-x-2"><button className="text-blue-600">✏️</button><button className="text-red-600">🗑️</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
