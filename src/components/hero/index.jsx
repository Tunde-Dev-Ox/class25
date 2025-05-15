import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import styles from './index.module.scss';
// import { motion } from 'framer-motion';

const Hero = () => {

    return (
        <div className={styles.hero}>
            <div className={styles.hero__innerwrapper}>
                <div className={styles.hero__content}>
                    <h1>
                        Africa&#39;s trusted cleaning partner for short-lets
                    </h1>
                    <p>
                        On-demand, vetted cleaners for your Airbnb or short-let — affordable and reliable, wherever you are in Africa.
                    </p>
                    <Link to="/auth/create-account" className={styles.hero__btn}>
                        Book Now
                    </Link>
                </div>
                <div className={styles.hero__image}>
                    <img src="/clean.svg" alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero