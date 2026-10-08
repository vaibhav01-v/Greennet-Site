import {Link} from 'react-router-dom';import usePage from '../hooks/usePage.js';import {FAQ} from '../data.js';
export default function Faq(){usePage('FAQ','Answers about GreenNest consultations, pricing, service areas, timelines and maintenance.');
return(<><div className="page-head"><div className="wrap"><h1>Frequently asked questions</h1><p>Short answers to common questions.</p></div></div>
<section><div className="wrap legal">{FAQ.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}<p style={{marginTop:24}}>Still unsure? <Link to="/contact#consult">Ask us directly</Link>.</p></div></section></>)}
