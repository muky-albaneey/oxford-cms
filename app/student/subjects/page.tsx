const data = [
  {title:'Mathematics', teacher:'Dr. Sarah Johnson', progress:85},
  {title:'English Language', teacher:'Ms. Brown', progress:78},
  {title:'Physics', teacher:'Mr. David Wilson', progress:82},
  {title:'Chemistry', teacher:'Dr. Michael Lee', progress:75},
  {title:'Biology', teacher:'Ms. Rachel Green', progress:88},
  {title:'Government', teacher:'Mr. James Smith', progress:80},
  {title:'Economics', teacher:'Mrs. Grace Okafor', progress:77},
];
export default function Subjects(){
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {data.map((c,i)=>(
        <div key={i} className="card p-4">
          <div className="font-semibold text-sm">{c.title}</div>
          <div className="text-xs text-slate-500">{c.teacher}</div>
          <div className="mt-3">
            <div className="text-xs text-slate-500 flex justify-between"><span>Progress</span><span>{c.progress}%</span></div>
            <div className="mt-1 h-2 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-emerald-600" style={{width:`${c.progress}%`}}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
