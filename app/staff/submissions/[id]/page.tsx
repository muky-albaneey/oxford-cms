export default function ViewSubmission(){
  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold">Alice Johnson's Submission</div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <div className="text-sm text-slate-500 mb-2">Submitted File: Calculus I Midterm.pdf</div>
          <div className="h-64 border rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">File Preview (PDF Viewer Placeholder)</div>
          <button className="mt-3 px-3 py-2 rounded-md border">Download PDF</button>
        </div>
        <div className="card p-5 space-y-3">
          <div><div className="text-xs text-slate-500 mb-1">Student</div><div className="font-medium">Alice Johnson</div></div>
          <div className="grid grid-cols-2 gap-3">
            <div><div className="text-xs text-slate-500 mb-1">Assignment</div><div>Calculus I Midterm</div></div>
            <div><div className="text-xs text-slate-500 mb-1">Submitted</div><div>Oct 15, 2025</div></div>
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-1">Grade (out of 100)</div>
            <input className="w-full border rounded-md px-3 py-2" defaultValue="90" />
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-1">Feedback Comments</div>
            <textarea className="w-full border rounded-md px-3 py-2" rows={4} placeholder="Write feedback here..."></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button className="px-3 py-2 rounded-md border">Cancel</button>
            <button className="px-3 py-2 rounded-md bg-blue-600 text-white">Save Grade</button>
          </div>
        </div>
      </div>
    </div>
  );
}
