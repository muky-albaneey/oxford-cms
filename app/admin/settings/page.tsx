import AdminShell from '@/components/AdminShell';
export default function SettingsPage(){
  return (
    <AdminShell>
      <div className="text-2xl font-semibold mb-4">Settings</div>
      <div className="grid md:grid-cols-[360px,1fr] gap-6">
        <div className="card p-4 space-y-3">
          <div className="font-medium">Profile Settings</div>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-slate-300"></div>
            <button className="px-3 py-2 rounded-md border">Upload New Photo</button>
          </div>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Name"/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Email"/>
          <div className="font-medium pt-2 border-t">Security Settings</div>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Current Password"/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="New Password"/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Confirm New Password"/>
        </div>
        <div className="space-y-6">
          <div className="card p-4 space-y-3">
            <div className="font-medium">School Settings</div>
            <input className="w-full border rounded-md px-3 py-2" placeholder="School Name" defaultValue="Oxford Manor College Abuja"/>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Email Address" defaultValue="info@oxfordmanor.edu.ng"/>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Phone Number" defaultValue="+234 123 456 7890"/>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Address" defaultValue="123 Education Drive, Abuja, Nigeria"/>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Site Title" defaultValue="Oxford Manor College - Excellence in Education"/>
            <textarea className="w-full border rounded-md px-3 py-2" rows={3} placeholder="Meta Description">Oxford Manor College provides world-class education in Abuja, Nigeria. Join us for academic excellence and character development.</textarea>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Facebook URL" defaultValue="https://facebook.com/oxfordmanor"/>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Twitter URL" defaultValue="https://twitter.com/oxfordmanor"/>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Instagram URL" defaultValue="https://instagram.com/oxfordmanor"/>
          </div>
          <div className="card p-4">
            <div className="font-medium mb-2">Notification Settings</div>
            <div className="space-y-3 text-sm">
              {['Email Notifications','SMS Notifications','Browser Notifications'].map((l,i)=>(
                <label key={i} className="flex items-center justify-between border rounded-md px-3 py-2">
                  <span>{l}</span>
                  <input type="checkbox" defaultChecked={i!=1} />
                </label>
              ))}
            </div>
            <div className="mt-4 text-right"><button className="px-3 py-2 rounded-md bg-blue-600 text-white">Save Changes</button></div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
