import styles from './index.module.scss'
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <div className={styles.secondary_header}>
            <header className={styles.secondary_header__container}>
                <div className={styles.secondary_header__wrapper}>
                    <div className={styles.secondary_header__logo}>
                        <Link to="/">
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
                                <Link to="/lecturers">
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
                    <div className={styles.secondary_header__btns}>
                        <button>
                            Meet the finalists
                        </button>
                    </div>
                </div>
            </header>
          </div>
  );
}

export default MainHeader;