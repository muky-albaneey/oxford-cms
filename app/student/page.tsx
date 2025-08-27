export default function StudentDashboard(){
  const grades = [
    {subject:'Mathematics', teacher:'Dr. Sarah Johnson', score:85},
    {subject:'English Language', teacher:'Ms. Emily Brown', score:78},
    {subject:'Physics', teacher:'Mr. David Wilson', score:82},
    {subject:'Chemistry', teacher:'Dr. Michael Lee', score:75},
  ];
  const assignments = [
    ['Mathematics Assignment 3','Mathematics','submitted'],
    ['English Essay: Nigerian Literature','English','graded'],
    ['Physics Lab Report','Physics','submitted'],
  ];
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <section className="card p-5">
        <div className="font-semibold">Recent Grades</div>
        <div className="mt-3 space-y-3">
          {grades.map((g,i)=>(
            <div key={i} className="border rounded-lg px-3 py-2 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">{g.subject}</div>
                <div className="text-xs text-slate-500">{g.teacher}</div>
              </div>
              <span className="px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700">{g.score}%</span>
            </div>
          ))}
        </div>
      </section>
      <section className="card p-5">
        <div className="font-semibold">Recent Assignments</div>
        <div className="mt-3 space-y-3">
          {assignments.map((a,i)=>(
            <div key={i} className="border rounded-lg px-3 py-2 flex items-center justify-between">
              <div>
                <div className="font-semibold text-sm">{a[0]}</div>
                <div className="text-xs text-slate-500">{a[1]}</div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${a[2]==='graded'?'bg-emerald-50 text-emerald-700':'bg-slate-100 text-slate-700'}`}>{a[2]}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
