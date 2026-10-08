import {Link} from 'react-router-dom';import usePage from '../hooks/usePage.js';import Reveal from '../components/Reveal.jsx';import Cta from '../components/Cta.jsx';import {PACKAGES} from '../data.js';
export default function Pricing(){usePage('Pricing','Example GreenNest service packages. Final quotes depend on your project.');
return(<><div className="page-head"><div className="wrap"><h1>Example packages</h1><p>Starting points to help you plan. Every garden is different.</p></div></div>
<section><div className="wrap"><div className="grid">{PACKAGES.map(p=><Reveal key={p.name} className={'card'+(p.feat?' feat':'')}><h3>{p.name}</h3><p className="price">{p.price}</p><p>{p.text}</p><ul>{p.inc.map(x=><li key={x}>{x}</li>)}</ul>
<Link className={'btn'+(p.feat?'':' ghost')} to="/contact#consult">Choose {p.name}</Link></Reveal>)}</div>
<p className="draft" style={{marginTop:30}}><strong>Note:</strong> these prices are examples. Final quotes depend on size, access, materials, and scope, and are confirmed in writing after a free consultation. Update these figures to match your real rates.</p></div></section><Cta/></>)}
