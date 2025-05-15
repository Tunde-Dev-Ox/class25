import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const MainHeader = () => {
    return (
        <header className={styles.mainheader}>
            <div className={styles.header_innerwrapper}>
                <div className={styles.logo}>
                    <Link to='/'>
                        {/* <img src="/Lulush.svg" alt="logo" /> */}
                        <span>
                            Zafique
                        </span>
                    </Link>
                </div>
                <nav className={styles.header_nav}>
                    <div className={styles.nav__innerwrapper}>
                        <ul className={styles.nav__ul}>
                            <li>
                                <Link to="/">
                                   How it works
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                   Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="https://forms.gle/PPqhwrf7ceSenFt87">
                                   For cleaners
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.right__nav}>
                    <div className={styles.right_nav__wrapper}>
                        <span>
                            <Link to="/auth/Login">
                                Login
                            </Link>
                        </span>
                        <span>
                            <Link to="/auth/create-account">
                                Book Now
                            </Link>
                        </span>
                    </div>
                </div>
                <div className={styles.hamburger}>
                        <div className={styles.hamburger__line}></div>
                        <div className={styles.hamburger__line}></div>
                        <div className={styles.hamburger__line}></div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader