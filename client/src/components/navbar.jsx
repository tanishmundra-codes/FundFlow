import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/"><p>FundFlow</p></Link>
                </div>

                <div className={`pages ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/feature">Features</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    {/* Mobile login buttons */}
                    <div className="login-section-mobile">
                        <Link to="/login"><button>Log in</button></Link>
                        <Link to="/signup"><button>Sign Up</button></Link>
                    </div>
                </div>

                {/* Desktop login buttons */}
                <div className="login-section">
                    <Link to="/login"><button>Log in</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>

                {/* Hamburger icon */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </>
    );
}

export default navbar;
