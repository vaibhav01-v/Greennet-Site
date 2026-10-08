import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';import Footer from './components/Footer.jsx';import BackToTop from './components/BackToTop.jsx';import ScrollManager from './components/ScrollManager.jsx';
import Home from './pages/Home.jsx';import About from './pages/About.jsx';import Services from './pages/Services.jsx';import Projects from './pages/Projects.jsx';
import Pricing from './pages/Pricing.jsx';import Faq from './pages/Faq.jsx';import Contact from './pages/Contact.jsx';import Legal from './pages/Legal.jsx';import NotFound from './pages/NotFound.jsx';
export default function App(){return(<><a className="skip" href="#main">Skip to content</a><ScrollManager/><Navbar/>
<main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/projects" element={<Projects/>}/>
<Route path="/pricing" element={<Pricing/>}/><Route path="/faq" element={<Faq/>}/><Route path="/contact" element={<Contact/>}/>
<Route path="/privacy" element={<Legal kind="privacy"/>}/><Route path="/terms" element={<Legal kind="terms"/>}/><Route path="*" element={<NotFound/>}/></Routes></main>
<Footer/><BackToTop/></>)}
