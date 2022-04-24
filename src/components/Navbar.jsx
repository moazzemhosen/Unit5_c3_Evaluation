import './style.css'

import {Link} from 'react-router-dom'

export const Navbar=()=>{
    return <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">User</Link>
        <Link to="/contact">Contact</Link>
        
    </div>
}