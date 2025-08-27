export default function SignIn(){
  return (
    <div className="container py-16">
      <div className="max-w-md mx-auto card p-8">
        <div className="text-2xl font-semibold text-center mb-2">Sign In</div>
        <div className="text-center text-sm text-slate-500 mb-4">Enter your credentials to access your account</div>
        <form className="grid gap-3">
          <input className="border rounded-md px-3 py-2" placeholder="Email"/>
          <input className="border rounded-md px-3 py-2" type="password" placeholder="Password"/>
          <a className="text-xs text-blue-600 justify-self-end" href="#">Forgot Password?</a>
          <button className="btn">Sign In</button>
          <a className="text-center text-sm text-blue-600" href="/">↩︎ Back to Home</a>
        </form>
      </div>
    </div>
  );
}
