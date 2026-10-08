import {useState} from 'react';import {Link} from 'react-router-dom';import usePage from '../hooks/usePage.js';import Ph from '../components/Ph.jsx';import Cta from '../components/Cta.jsx';import {PROJECTS} from '../data.js';
const TYPES=['All',...new Set(PROJECTS.map(p=>p.type))];
export default function Projects(){usePage('Projects','Browse completed GreenNest gardens and filter by project type.');
const [f,setF]=useState('All'),list=PROJECTS.filter(p=>f==='All'||p.type===f);
return(<><div className="page-head"><div className="wrap"><h1>Completed projects</h1><p>Filter by the kind of work you are considering.</p></div></div>
<section><div className="wrap"><div className="filters" role="group" aria-label="Filter projects">{TYPES.map(t=><button key={t} aria-pressed={f===t} onClick={()=>setF(t)}>{t}</button>)}</div>
<p role="status">{list.length} project{list.length===1?'':'s'} shown</p>
<div className="grid">{list.map(p=><article className="card" style={{paddingTop:0}} key={p.name}><div style={{margin:'0 -26px 18px'}}><Ph label={p.text} t={p.t}/></div><h3>{p.name}</h3><p><strong>{p.type}</strong></p><p>{p.text}</p></article>)}</div>
{!list.length&&<p>No projects match this filter yet. <Link to="/contact#consult">Ask us about yours</Link>.</p>}</div></section><Cta/></>)}
