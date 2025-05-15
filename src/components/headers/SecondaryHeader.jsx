import React from 'react';
import { Link } from 'react-router-dom';
// import './index.scss'

const SecondaryHeader = () => {
    return (
        <header className="mainheader">
            <div className="header-innerwrapper">
                <Link to='/' className="logo">
                    <img src="/Lulush.svg" alt="logo" />
                </Link>
            </div>
        </header>
    )
}

export default SecondaryHeader