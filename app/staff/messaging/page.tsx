'use client';
import { useState } from 'react';

const conversations = [
  {name:'Jane Smith', last:'Thanks for the quick response!'},
  {name:'PTA Team', last:'Please confirm Friday, October 12th.'},
  {name:'Student Support', last:'Meeting scheduled for next week.'},
  {name:'Mark Johnson', last:'Can we extend the deadline?'},
];

export default function Messaging(){
  const [selected, setSelected] = useState(0);
  const [messages, setMessages] = useState([
    {from:'Jane Smith', text:'Hi, about the new assignment, could you please clarify the due date?', me:false},
    {from:'Me', text:'It’s due next Friday, October 12th. Let me know if you need more time.', me:true},
    {from:'Jane Smith', text:'Ok, thanks for the quick response!', me:false},
  ] as {from:string,text:string,me:boolean}[]);
  const [input, setInput] = useState('');

  function send(){
    if(!input.trim()) return;
    setMessages([...messages, {from:'Me', text:input, me:true}]);
    setInput('');
  }

  return (
    <div className="grid md:grid-cols-[280px,1fr] gap-6">
      <aside className="card p-4 space-y-2 h-fit">
        <div className="font-medium mb-2">Messaging</div>
        <div className="space-y-1">
          {conversations.map((c,i)=>(
            <button key={i} onClick={()=>setSelected(i)} className={`w-full text-left px-3 py-2 rounded-md ${i===selected?'bg-slate-100':'hover:bg-slate-50'}`}>
              <div className="font-medium text-sm">{c.name}</div>
              <div className="text-xs text-slate-500 line-clamp-1">{c.last}</div>
            </button>
          ))}
        </div>
      </aside>
      <section className="card p-4 flex flex-col h-[520px]">
        <div className="font-medium border-b pb-2 mb-3">Chat with {conversations[selected].name}</div>
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((m, i)=>(
            <div key={i} className={`max-w-[80%] rounded-lg px-3 py-2 ${m.me?'ml-auto bg-blue-600 text-white':'bg-slate-100'}`}>{m.text}</div>
          ))}
        </div>
        <div className="pt-3 border-t mt-3 flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 border rounded-md px-3 py-2" placeholder="Type your message..." />
          <button onClick={send} className="px-3 py-2 rounded-md bg-blue-600 text-white">Send</button>
        </div>
      </section>
    </div>
  );
}
