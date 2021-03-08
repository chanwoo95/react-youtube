import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <span className="navbar-logo">
                        <i class="fab fa-youtube"></i>
                    </span>
                    <span className="navbar-title">Youtube</span>
                </div>
                <div className="navbar-s">
                    <input
                        type="text"
                        className="navbar-input"
                        placeholder="검색"
                    />
                    <button className="navbar-search">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div className="navbar-button">
                    <i class="fas fa-video"></i>
                    <i class="fas fa-bell"></i>
                </div>
            </header>
        );
    }
}

export default Navbar;
