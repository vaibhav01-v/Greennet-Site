import {Link} from 'react-router-dom';import usePage from '../hooks/usePage.js';
export default function NotFound(){usePage('Page not found');return <div className="page-head"><div className="wrap"><h1>Page not found</h1><p>That page doesn't exist. <Link to="/">Go to the home page</Link>.</p></div></div>}
