import {Link} from 'react-router-dom';import usePage from '../hooks/usePage.js';import Reveal from '../components/Reveal.jsx';import Ph from '../components/Ph.jsx';import Cta from '../components/Cta.jsx';
import {SERVICES,PROJECTS,TESTIMONIALS} from '../data.js';
const BENEFITS=[['Low-maintenance by design','We pick plants that suit your light, soil, and free time.'],['Clear, fixed quotes','You see scope and price before we start digging.'],['Local, trained crew','The same friendly team plans and builds your project.'],['Renter-friendly options','Container and removable upgrades that move with you.']];
export default function Home(){usePage('Garden design, landscaping and lawn care','GreenNest helps homeowners and renters create beautiful, easy-to-maintain gardens. Book a free consultation.');
return(<>
<section className="hero"><div className="wrap"><div><h1>A garden you love, without the weekend work.</h1>
<p className="lead">GreenNest designs, plants, and looks after outdoor spaces for homeowners and renters who want something beautiful that stays easy to maintain.</p>
<div className="row"><Link className="btn" to="/contact#consult">Book a Free Consultation</Link><Link className="btn ghost" to="/#services">Explore services</Link></div></div>
<Ph label="Sunlit garden path lined with green shrubs and terracotta pots"/></div></section>
<section id="services" className="alt"><div className="wrap"><h2>What we do</h2><p>Five services, from first sketch to year-round care.</p>
<div className="grid">{SERVICES.map(s=><Reveal as="article" className="card" key={s.id}><h3>{s.name}</h3><p>{s.blurb}</p><Link to={`/services#${s.id}`}>What is included</Link></Reveal>)}</div></div></section>
<section><div className="wrap"><h2>Why homeowners choose GreenNest</h2><div className="grid">{BENEFITS.map(([h,p])=><Reveal key={h}><h3>{h}</h3><p>{p}</p></Reveal>)}</div></div></section>
<section className="alt"><div className="wrap"><h2>Recent projects</h2><div className="grid">{PROJECTS.slice(0,3).map(p=><Reveal key={p.name}><Ph label={p.text} t={p.t}/><h3 style={{marginTop:12}}>{p.name}</h3></Reveal>)}</div>
<p style={{marginTop:24}}><Link className="btn ghost" to="/projects">View all projects</Link></p></div></section>
<section className="dark"><div className="wrap"><h2>What customers say</h2><div className="grid">{TESTIMONIALS.map(([q,a])=><Reveal as="blockquote" key={a}>“{q}”<footer>{a}</footer></Reveal>)}</div>
<p style={{marginTop:20,fontSize:'.9rem'}}>Sample testimonials: replace with real customer reviews before launch.</p></div></section><Cta/></>)}
