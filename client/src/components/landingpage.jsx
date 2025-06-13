import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-wrapper">
            
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Track & Manage Your Investments with <span className="highlight" style={{color: '#3E5BDF'}}>FundFLow</span></h1>
                    <p>All your investments — stocks, mutual funds, crypto, and more — in one place. Know your portfolio's worth, performance, and growth at a glance.</p>
                    <div className="hero-buttons">
                        <Link to="/login"><button>Log In</button></Link>
                        <Link to="/signup"><button>Get Started for Free</button></Link>
                    </div>
                </div>
                <div className="hero-image">IMAGE</div>
            </section>
            
            <section className="why-section">
                <h2>Why Choose FundFLow?</h2>
                <div className="features">
                    <div className="feature-box">
                        <span className="feature-icon">📊</span>
                        <h3>Unified Portfolio View</h3>
                        <p>See all your investments across different platforms and asset classes in one comprehensive dashboard. Track stocks, mutual funds, crypto, and bonds together.</p>
                    </div>
                    <div className="feature-box">
                        <span className="feature-icon">📈</span>
                        <h3>Real-time Performance</h3>
                        <p>Get live updates on your portfolio performance with detailed analytics, profit/loss tracking, and personalized insights to make informed decisions.</p>
                    </div>
                    <div className="feature-box">
                        <span className="feature-icon">🔒</span>
                        <h3>Bank-level Security</h3>
                        <p>Your financial data is protected with enterprise-grade encryption and security measures. We never store your banking credentials or personal passwords.</p>
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section footer-brand">
                        <h4>FundFLow</h4>
                        <p>Your trusted partner for investment tracking and portfolio management. Make smarter financial decisions with comprehensive insights.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="LinkedIn">💼</a>
                            <a href="#" aria-label="Facebook">📘</a>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2025 FundFLow. All rights reserved. | Empowering smart investment decisions.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;