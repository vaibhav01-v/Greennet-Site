import {useEffect,useState} from 'react';
export default function BackToTop(){const [s,setS]=useState(false);
useEffect(()=>{const f=()=>setS(scrollY>700);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
return <button id="top" className={s?'show':''} aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})}>↑</button>}
