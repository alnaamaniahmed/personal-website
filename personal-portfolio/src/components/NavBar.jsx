import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "../navbar.css";


function NavBar({ onNavClick }){
    const[active, setActive] = useState("nav__menu");
    const[toggleIcon , setToggleIcon] = useState("nav__toggler");
    const[navColor, setNavColor] = useState(false);
    const navToggle = () => {
        setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
        setToggleIcon(toggleIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
    };
    
    const handleNavLinkClick = () => {
        if (active !== "nav__menu") { 
            navToggle();
        }
    };
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 80) {
                setNavColor(true);
            } else {
                setNavColor(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return (
        <div className="container">
            <nav className={`nav ${navColor ? "nav_color" : ""}`}>
                <Link to="/" onClick={(e) => { e.preventDefault(); onNavClick(); }} className="nav__brand">
                    <span className="brand-symbol">&lt;</span>
                    <span className="brand-name">Ahmed</span>
                    <span className="brand-symbol">/&gt;</span>
                </Link>
                <ul className={active}>
                    <li className="nav__item"><Link to="/" onClick={handleNavLinkClick} className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to="/about" onClick={handleNavLinkClick} className="nav__link">About</Link></li>
                    <li className="nav__item"><Link to="/projects" onClick={handleNavLinkClick} className="nav__link">Projects</Link></li>
                    <li className="nav__item"><Link to="/resume" onClick={handleNavLinkClick} className="nav__link">Resume</Link></li>
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
