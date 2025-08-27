export default function StudentSignUp(){
  return (
    <div className="container grid md:grid-cols-2 gap-8 items-center py-10">
      <div className="card p-8 max-w-lg">
        <div className="text-2xl font-semibold">Sign Up</div>
        <div className="text-sm text-slate-500">Already have an account? <a className="text-emerald-700" href="/student/signin">Sign in</a></div>
        <form className="mt-6 grid gap-3">
          <input className="border rounded-md px-3 py-2" placeholder="Full Name"/>
          <input className="border rounded-md px-3 py-2" placeholder="Email"/>
          <input className="border rounded-md px-3 py-2" type="password" placeholder="Password"/>
          <input className="border rounded-md px-3 py-2" type="password" placeholder="Confirm Password"/>
          <div className="space-y-2">
            <div className="text-xs text-slate-500">Role</div>
            <label className="flex items-center gap-2 text-sm"><input type="radio" name="role" defaultChecked /> Student</label>
            <label className="flex items-center gap-2 text-sm"><input type="radio" name="role" /> Staff</label>
          </div>
          <button className="px-4 py-2 rounded-md bg-emerald-600 text-white">Sign Up</button>
          <div className="text-center text-xs text-slate-500">or</div>
          <div className="grid grid-cols-2 gap-2">
            <button className="border rounded-md px-3 py-2">Sign up with Google</button>
            <button className="border rounded-md px-3 py-2">Sign up with Facebook</button>
          </div>
        </form>
      </div>
      <div className="rounded-2xl overflow-hidden bg-slate-200 shadow-soft min-h-[500px]" />
    </div>
  );
}
