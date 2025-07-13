import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import WaitlistSlider from '../../components/sliders/waitlistSlider';


const Home = () => {
    return (
        <div className='app'>
            <main>
                <div className={styles.waitlist}>
                    <div className={styles.waitlist__innerwrapper}>
                        <div className={styles.waitlist__content__text}>
                            <header className={styles.main__header}>
                                <div className={styles.main__header_wrapper}>
                                    <div className={styles.main_logo}>
                                        <Link>
                                            Casa25
                                        </Link>
                                    </div>
                                    <nav>
                                        <ul className={styles.main__header__nav}>
                                            <li>
                                                <Link to="/meet-the-finalists">
                                                    Meet finalists
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">
                                                    Lecturers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">
                                                    Gallery
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">
                                                    Our journey
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </header>
                            <span className={styles.coming__soon}>
                                Creative Arts Department, University of Lagos
                            </span>
                            <h1>
                                From freshmen to <span className={styles.waitlist__content__text__highlight}>finalists</span>
                            </h1>
                            <p className={styles.waitlist__content__text__description}>
                                Five years of growth, laughter, stress, and success. Let us take you through our journey at the Creative Arts Department, University of Lagos.
                            </p>
                            <div className={styles.join__waitlist}>
                                <Link to="https://forms.gle/uDcxwLRjBbYWC9S5A" className={styles.join__waitlist__btn}>
                                    Meet the Class of 2025
                                </Link>
                            </div>
                            <div className={styles.waitlist__progress}>
                                <div className={styles.waitlist__progress__innerwrapper}>
                                    <div className={styles.waitlist__progress__bar}>
                                        <div className={styles.waitlist__progress__bar__fill}></div>
                                    </div>
                                    <span className={styles.waitlist__progress__text}>
                                        200 days to convocation
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.waitlist__content__image}>
                            <div className={styles.waitlist__content__image__wrapper}>
                                <WaitlistSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home