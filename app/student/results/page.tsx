function Card({term, avg, pos, total}:{term:string, avg:number, pos:string, total:number}){
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
      <div className="px-5 py-4 border-b">
        <div className="font-semibold">{term}</div>
        <div className="text-xs text-slate-500">Academic Performance Report</div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="p-5 bg-emerald-50">
          <div className="text-xs text-slate-500">Average Score</div>
          <div className="text-3xl font-extrabold text-emerald-700">{avg}%</div>
        </div>
        <div className="p-5 bg-blue-50">
          <div className="text-xs text-slate-500">Class Position</div>
          <div className="text-3xl font-extrabold text-blue-700">{pos}</div>
        </div>
        <div className="p-5 bg-fuchsia-50">
          <div className="text-xs text-slate-500">Total Students</div>
          <div className="text-3xl font-extrabold text-fuchsia-700">{total}</div>
        </div>
      </div>
    </div>
  );
}
export default function Results(){
  return (
    <div className="space-y-5">
      <div className="text-xl font-bold">Term Results</div>
      <div className="space-y-5">
        <Card term="First Term 2024" avg={82} pos="5th" total={45}/>
        <Card term="Second Term 2024" avg={85} pos="3rd" total={45}/>
        <Card term="Third Term 2023" avg={79} pos="7th" total={44}/>
      </div>
    </div>
  );
}
