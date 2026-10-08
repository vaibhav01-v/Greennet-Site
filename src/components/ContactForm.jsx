import {useState} from 'react';import {SERVICES} from '../data.js';
const ENDPOINT=import.meta.env.VITE_FORM_ENDPOINT; // set in .env to enable sending
const empty={name:'',email:'',phone:'',service:'',message:'',website:''};
const rules={name:v=>v.trim().length>1||'Enter your name.',email:v=>/^\S+@\S+\.\S+$/.test(v)||'Enter a valid email address, like name@example.com.',
phone:v=>!v||/^[\d\s()+-]{7,}$/.test(v)||'Enter a valid phone number or leave it blank.',service:v=>!!v||'Choose a service.',message:v=>v.trim().length>=10||'Tell us a little more (at least 10 characters).'};
const Field=({id,label,err,children})=><div><label htmlFor={id}>{label}</label>{children}<p className="err" role="alert">{err}</p></div>;
export default function ContactForm(){
  const [v,setV]=useState(empty),[errs,setErrs]=useState({}),[st,setSt]=useState(null),[busy,setBusy]=useState(false);
  const bind=k=>({id:k,name:k,value:v[k],onChange:e=>setV({...v,[k]:e.target.value}),'aria-invalid':!!errs[k]});
  async function submit(e){e.preventDefault();setSt(null);const er={};
    for(const k in rules){const r=rules[k](v[k]);if(r!==true)er[k]=r}
    setErrs(er);const keys=Object.keys(er);
    if(keys.length){setSt({ok:false,text:'Please fix the highlighted fields.'});document.getElementById(keys[0]).focus();return}
    if(v.website)return; // honeypot: bots fill the hidden field
    if(!ENDPOINT){setSt({ok:false,unsent:true});return}
    setBusy(true);
    try{const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(v)});if(!r.ok)throw 0;
      setV(empty);setSt({ok:true,text:'Thanks! We received your request and will reply within one business day.'})}
    catch{setSt({ok:false,text:'Something went wrong sending your message. Please try again or email hello@greennest.example.'})}
    setBusy(false)}
  return(<form onSubmit={submit} noValidate>
    <Field id="name" label="Your name" err={errs.name}><input {...bind('name')} autoComplete="name"/></Field>
    <Field id="email" label="Email" err={errs.email}><input {...bind('email')} type="email" autoComplete="email"/></Field>
    <Field id="phone" label="Phone (optional)" err={errs.phone}><input {...bind('phone')} type="tel" autoComplete="tel"/></Field>
    <Field id="service" label="Service" err={errs.service}><select {...bind('service')}><option value="">Choose one</option>{SERVICES.map(s=><option key={s.id}>{s.name}</option>)}</select></Field>
    <Field id="message" label="How can we help?" err={errs.message}><textarea {...bind('message')} rows={5}/></Field>
    <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.website} onChange={e=>setV({...v,website:e.target.value})}/>
    <button className="btn" type="submit" disabled={busy}>{busy?'Sending…':'Request a Consultation'}</button>
    <div role="status">{st&&<p className={'note '+(st.ok?'ok':'bad')}>{st.unsent?<>Your message was <strong>not sent</strong>: this form isn't connected to an email service yet. You can <a href={`mailto:hello@greennest.example?subject=Consultation request&body=${encodeURIComponent(v.message+'\n\n'+v.name+' '+v.phone)}`}>send it by email instead</a> or call (555) 010-0123.</>:st.text}</p>}</div></form>)}
