export default function StudentProfile(){
  return (
    <div className="grid md:grid-cols-[1fr,380px] gap-6">
      <div className="card p-5">
        <div className="font-semibold">Student Profile</div>
        <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
          <div><div className="text-xs text-slate-500 mb-1">Full Name</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="John Doe" /></div>
          <div><div className="text-xs text-slate-500 mb-1">Student ID</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="OMC2024001" /></div>
          <div><div className="text-xs text-slate-500 mb-1">Email Address</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="john.doe@student.oxfordmanor.edu.ng" /></div>
          <div><div className="text-xs text-slate-500 mb-1">Class</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="SS2 Science" /></div>
          <div><div className="text-xs text-slate-500 mb-1">House</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="Churchill House" /></div>
          <div><div className="text-xs text-slate-500 mb-1">Date of Birth</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="January 16, 2007" /></div>
          <div><div className="text-xs text-slate-500 mb-1">Phone Number</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="+234 801 234 5678" /></div>
          <div><div className="text-xs text-slate-500 mb-1">Parent/Guardian Phone</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="+234 803 456 7890" /></div>
          <div className="md:col-span-2"><div className="text-xs text-slate-500 mb-1">Home Address</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="123 Victoria Island, Lagos State, Nigeria" /></div>
          <div className="md:col-span-2"><div className="text-xs text-slate-500 mb-1">Emergency Contact</div><input className="border rounded-md px-3 py-2 w-full" defaultValue="Mrs. Jane Doe (Mother), +234 803 456 7890, jane.doe@gmail.com" /></div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-2 rounded-md bg-emerald-600 text-white">Update Profile</button>
          <button className="px-3 py-2 rounded-md border">Change Password</button>
        </div>
      </div>
      <div className="card p-5">
        <div className="text-center">
          <div className="h-20 w-20 rounded-full bg-slate-300 mx-auto"></div>
          <div className="mt-2 text-sm text-slate-600">Change Photo</div>
        </div>
        <div className="mt-4">
          <div className="text-center text-sm font-semibold">Change Password</div>
          <div className="mt-3 grid gap-2">
            <input className="border rounded-md px-3 py-2" placeholder="Current Password"/>
            <input className="border rounded-md px-3 py-2" placeholder="New Password"/>
            <input className="border rounded-md px-3 py-2" placeholder="Confirm Password"/>
            <button className="px-3 py-2 rounded-md bg-emerald-600 text-white">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
