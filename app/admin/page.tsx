import Link from 'next/link';
export default function AdminHome(){
  const contentItems = [
    {slug:'home', title:'Homepage'},
    {slug:'about', title:'About Us'},
    {slug:'academics', title:'Academics'},
    {slug:'admissions', title:'Admissions'},
    {slug:'contact', title:'Contact'},
  ];
  const adminItems = [
    {href:'/admin/dashboard', title:'Dashboard'},
    {href:'/admin/page-management', title:'Page Management'},
    {href:'/admin/content', title:'Content Management'},
    {href:'/admin/analytics', title:'Analytics'},
    {href:'/admin/users', title:'User Management'},
    {href:'/admin/documents', title:'Documents'},
    {href:'/admin/message', title:'Message'},
    {href:'/admin/settings', title:'Settings'},
  ];
  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <div className="text-2xl font-semibold mb-4">Admin Pages</div>
          <div className="grid md:grid-cols-2 gap-4">
            {adminItems.map(i=>(
              <Link key={i.href} href={i.href} className="card p-6 hover:shadow-lg transition">
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-slate-500">Open</div>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <div className="text-2xl font-semibold mb-4">Site Content (Editable)</div>
          <div className="grid md:grid-cols-2 gap-4">
            {contentItems.map(i=>(
              <Link key={i.slug} href={`/admin/site/${i.slug}`} className="card p-6 hover:shadow-lg transition">
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-slate-500">Edit content and publish</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
