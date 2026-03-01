import React, { useState } from 'react';
import { StrictMode } from 'react';
import Gallery from './Gallery.jsx';
import Home from './Home.jsx';
import Calendar from './Calendar.jsx';
import Countdown from './Countdown.jsx';

const TABS = [
    { id: 'home',      label: 'Home' },
    { id: 'gallery',   label: 'Gallery' },
    { id: 'calendar',  label: 'Daily Compliment' },
    { id: 'countdown', label: 'Countdown' },
];

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState('home');
    const [animKey, setAnimKey] = useState(0);

    const handleNavClick = (page, e) => {
        e.preventDefault();
        if (page !== currentPage) {
            setCurrentPage(page);
            setAnimKey(k => k + 1);
        }
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'home':      return <StrictMode><Home /></StrictMode>;
            case 'gallery':   return <StrictMode><Gallery /></StrictMode>;
            case 'calendar':  return <StrictMode><Calendar /></StrictMode>;
            case 'countdown': return <StrictMode><Countdown /></StrictMode>;
            default:          return <h1>Page Not Found</h1>;
        }
    };

    return (
        <div>
            <div className="buffer" />

            <nav className="navbar">
                <div className="navbar-brand">♡</div>
                <ul>
                    {TABS.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href=""
                                onClick={e => handleNavClick(id, e)}
                                className={currentPage === id ? 'active' : ''}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div key={animKey} className="page-content fade-in">
                {renderContent()}
            </div>

            <div className="bottom">
                <p>Made with love by Danny · 2025</p>
            </div>
        </div>
    );
}
