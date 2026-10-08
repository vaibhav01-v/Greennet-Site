import {useEffect,useState} from 'react';import {Link,NavLink,useLocation} from 'react-router-dom';import {NAV} from '../data.js';
export default function Navbar(){
  const [open,setOpen]=useState(false),[small,setSmall]=useState(false),{pathname}=useLocation();
  useEffect(()=>{const f=()=>setSmall(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
  useEffect(()=>setOpen(false),[pathname]);
  useEffect(()=>{const k=e=>e.key==='Escape'&&setOpen(false);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
  return(<header className={'site'+(small?' small':'')}><div className="wrap">
    <Link className="logo" to="/">Green<span>Nest</span></Link>
    <button className="menu" aria-expanded={open} aria-controls="nav" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
    <nav id="nav" aria-label="Main" className={open?'open':''}><ul>
      {NAV.map(([to,label])=><li key={to}><NavLink to={to} end={to==='/'}>{label}</NavLink></li>)}
      <li><Link className="btn" to="/contact#consult">Book a Free Consultation</Link></li></ul></nav></div></header>);
}
