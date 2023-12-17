/**
 * 
 * code clean-up
tasks - Create a custom hook for [activeTab,setActiveTab]
*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';
//navItems holds the array of objects for navbar
import { navItems } from './constants';

const HomePage = () => {
   

    

    // State to manage the active class default is home
    const [activeTab, setActiveTab] = useState('/');

    const handleTabClick = (link) => {
        setActiveTab(link);
    };

    return (
       
            <>
                    <nav className="nav container">
                <div className="header" id="header">
                        <div className="nav__logo">-{}-{}-{}-FLIXBOOK_LOGO-{}-{}    -</div>
                        <div className="nav__menu" id="nav-menu">
                            <ul className="nav__list">
                                {/* Dynamically generate navigation items */}
                                {navItems.map((item) => (
                                    <li key={item.id} className="nav__item">
                                        <Link
                                            to={item.link}
                                            className={`nav__link ${activeTab === item.link ? 'active-link' : ''}`}
                                            onClick={() => handleTabClick(item.link)}
                                        >
                                            <i className={item.icon + ' nav__icon'}></i>
                                            <span className="nav__name">{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
                    </nav>
            </>
      
    );
};

export default HomePage;
