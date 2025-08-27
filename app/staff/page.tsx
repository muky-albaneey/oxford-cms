export default function StaffDashboard(){
  const cards = [
    ['Assignments','Manage assignments, grading, projects.','/staff/assignments'],
    ['Messaging','Chat with students and staff.','/staff/messaging'],
    ['Calendar','Upcoming events & key dates.','/staff/calendar'],
    ['Announcements','Create and manage announcements.','/staff/announcements'],
    ['Notifications','Check all news and updates.','/staff/notifications'],
    ['Grades','Manage student grades and marks.','/staff/grades'],
  ];
  return (
    <div className="space-y-6">
      <div className="card p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-300"></div>
          <div>
            <div className="font-semibold">Welcome, John Ajayi!</div>
            <div className="text-sm text-slate-500">Staff Member, Computer Science Department</div>
          </div>
        </div>
        <a className="btn-outline text-sm" href="/staff/profile">View Profile</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c,i)=>(
          <a key={i} className="card p-5 hover:shadow-lg transition block" href={c[2]}>
            <div className="font-medium">{c[0]}</div>
            <div className="text-sm text-slate-600">{c[1]}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
