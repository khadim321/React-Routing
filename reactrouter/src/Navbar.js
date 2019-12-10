import React from 'react';
import './Navstyle.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="Navstyle">
            <ul>
                <li> <Link to ="/"> Home  </Link></li>
                <li> <Link to ="/About">  About </Link></li>
                <li> <Link to ="Contect">   Contect   </Link></li>
            </ul>
        </div>
    )
}
export default Navbar;