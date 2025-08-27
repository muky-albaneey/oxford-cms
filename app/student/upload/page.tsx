export default function UploadDocs(){
  return (
    <div className="card p-5 max-w-4xl">
      <div className="font-semibold">Upload Documents</div>
      <div className="text-xs text-slate-500">Submit assignments and other academic documents</div>
      <div className="grid md:grid-cols-2 gap-3 mt-4">
        <div>
          <div className="text-xs text-slate-500 mb-1">Subject</div>
          <select className="border rounded-md px-3 py-2 w-full"><option>Choose subject</option></select>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">Document Type</div>
          <select className="border rounded-md px-3 py-2 w-full"><option>Assignment</option></select>
        </div>
      </div>
      <div className="mt-3">
        <div className="text-xs text-slate-500 mb-1">Document Title</div>
        <input className="border rounded-md px-3 py-2 w-full" placeholder="Enter document title"/>
      </div>
      <div className="mt-3">
        <div className="text-xs text-slate-500 mb-1">Description (Optional)</div>
        <textarea className="border rounded-md px-3 py-2 w-full" rows={4} placeholder="Add any additional notes or description"></textarea>
      </div>
      <div className="mt-3">
        <div className="text-xs text-slate-500 mb-1">Upload File</div>
        <div className="border-2 border-dashed rounded-xl p-10 text-center text-slate-500">
          Click to upload or drag and drop
          <div className="text-xs mt-1">PDF, DOC, DOCX, or images (MAX. 10MB)</div>
        </div>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white">Submit Document</button>
      </div>
    </div>
  );
}
