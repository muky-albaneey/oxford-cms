export default function StudentSignIn(){
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-[#eaf7ef] to-white">
      <div className="container py-10">
        <div className="max-w-md mx-auto card p-8">
          <div className="text-2xl font-semibold text-center mb-2">Sign In</div>
          <div className="text-center text-sm text-slate-500 mb-4">Enter your credentials to access your account</div>
          <form className="grid gap-3">
            <input className="border rounded-md px-3 py-2" placeholder="Enter your email"/>
            <input className="border rounded-md px-3 py-2" type="password" placeholder="Enter your password"/>
            <a className="text-xs text-emerald-700 justify-self-start" href="#">Forgot Password?</a>
            <button className="px-4 py-2 rounded-md bg-emerald-600 text-white">Sign In</button>
            <a className="text-center text-sm text-emerald-700" href="/">↩︎ Back to Home</a>
          </form>
        </div>
      </div>
    </div>
  );
}
