import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../navbar.css";


function NavBar(props){
    const[active, setActive] = useState("nav__menu");
    const[toggleIcon , setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === "nav__menu"
         ? setActive("nav__menu nav__active")
         : setActive("nav__menu");

        toggleIcon === "nav__toggler"
         ? setToggleIcon("nav__toggler toggle") 
         : setToggleIcon("nav__toggler");

    }
    return (
        <div className="container">
            <nav className="nav">
                <Link to="/" className="nav__brand">
                    <span className="brand-symbol">&lt;</span>
                    <span className="brand-name">Ahmed</span>
                    <span className="brand-symbol">/&gt;</span>
                </Link>
                <ul className={active}>
                    <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                    <li className="nav__item"><Link to="/projects" className="nav__link">Projects</Link></li>
                    <li className="nav__item"><Link to="/resume" className="nav__link">Resume</Link></li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;
