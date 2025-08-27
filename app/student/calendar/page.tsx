export default function CalendarPage(){
  const absents = ['March 5, 2024','March 12, 2024','March 18, 2024'];
  const events = [
    ['Mid-Term Examinations', 'March 25-29, 2024', 'bg-blue-50'],
    ['Inter-House Sports', 'April 5, 2024', 'bg-emerald-50'],
    ['Science Fair', 'April 12, 2024', 'bg-fuchsia-50'],
  ];
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="card p-5">
        <div className="font-semibold">Academic Calendar & Attendance</div>
        <div className="mt-3">
          <input className="border rounded-md px-3 py-2 w-full" placeholder="Select a date" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-xl border p-4 bg-red-50">
            <div className="font-semibold text-red-700 text-sm">Absent Days</div>
            <ul className="mt-2 text-sm text-red-700 space-y-1">
              {absents.map((a,i)=>(<li key={i}>{a}</li>))}
            </ul>
          </div>
          <div className="rounded-xl border p-4 bg-emerald-50">
            <div className="font-semibold text-emerald-800 text-sm">Attendance Summary</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div>Days Present: <b>47</b></div>
              <div>Total Days: <b>50</b></div>
              <div>Days Absent: <b>3</b></div>
              <div>Attendance: <b>94%</b></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-5">
        <div className="font-semibold">Upcoming Events</div>
        <div className="mt-3 space-y-3">
          {events.map((e,i)=>(
            <div key={i} className={`rounded-xl border p-4 ${e[2]}`}>
              <div className="font-semibold text-sm">{e[0]}</div>
              <div className="text-xs text-slate-600">{e[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
