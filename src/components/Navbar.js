import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
// Assets
import logoWhite from '../assets/icons/Logo.png';
import logoBlack from '../assets/images/logo_black.svg';
import ellipse from '../assets/icons/Ellipse 4.svg';
import arrowWhite from '../assets/icons/arrow_icon.png';
import arrowGroup36 from '../assets/images/Group 36.svg';
import { scrollToContact } from '../utils/scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // Determine navbar theme class
    let navbarClass = 'navbar';
    if (isHome) {
        navbarClass += scrolled ? ' scrolled' : ' transparent';
    } else {
        navbarClass += ' light-theme';
    }

    // Determine logo and icons based on theme
    const logoSrc = isHome ? logoWhite : logoBlack;
    const arrowIconSrc = isHome ? arrowWhite : arrowGroup36;

    return (
        <nav className={navbarClass}>
            {/* Logo */}
            <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
                <img
                    src={logoSrc}
                    alt="IHEMA Logo"
                    className="navbar-logo"
                />
            </Link>

            <div className="right-container">
                {/* Hamburger menu */}
                <div
                    className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
                    onClick={handleToggleMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Nav links */}
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {[
                        { name: 'About Us', path: '/#about-us' },
                        { name: 'Services', path: '/#services' },
                        { name: 'Approach', path: '/#approach' },
                        { name: 'Research', path: '/#research' },
                        { name: 'Team', path: '/#team' },
                        { name: 'FAQ', path: '/#faq' },
                        { name: 'Contact', path: '/#contact' },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            <span>
                                {item.name}
                            </span>
                            <img src={ellipse} className="ellipse" alt="" />
                        </Link>
                    ))}
                </div>

                {/* Get Involved button */}
                <a href="#contact" className="nav-actions-link" onClick={scrollToContact}>
                    <div className="nav-actions">
                        <p>Get Involved</p>
                        <img src={arrowIconSrc} alt="Arrow Icon" />
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
