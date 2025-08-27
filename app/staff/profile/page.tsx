export default function StaffProfile(){
  return (
    <div className="space-y-6">
      <div className="card p-5 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-300"></div>
        <div>
          <div className="font-semibold">John Ajayi</div>
          <div className="text-xs text-slate-500">Staff Member, Computer Science Department</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5 space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <div><div className="text-xs text-slate-500 mb-1">Full Name</div><input className="w-full border rounded-md px-3 py-2" defaultValue="John Doe"/></div>
            <div><div className="text-xs text-slate-500 mb-1">Email Address</div><input className="w-full border rounded-md px-3 py-2" defaultValue="john.doe@oxfordmanor.edu"/></div>
            <div><div className="text-xs text-slate-500 mb-1">Department</div><input className="w-full border rounded-md px-3 py-2" defaultValue="Computer Science"/></div>
            <div><div className="text-xs text-slate-500 mb-1">Role</div><input className="w-full border rounded-md px-3 py-2" defaultValue="Staff Member" disabled/></div>
            <div><div className="text-xs text-slate-500 mb-1">Phone Number</div><input className="w-full border rounded-md px-3 py-2" defaultValue="+234 (555) 123-4567"/></div>
            <div className="md:col-span-2"><div className="text-xs text-slate-500 mb-1">About Me</div><textarea className="w-full border rounded-md px-3 py-2" rows={3} defaultValue="Experienced staff member with a focus on student support and academic administration." /></div>
          </div>
          <div className="pt-2"><button className="px-4 py-2 rounded-md bg-blue-600 text-white">Save Changes</button></div>
        </div>
      </div>
    </div>
  );
}
