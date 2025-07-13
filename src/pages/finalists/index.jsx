import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import client from '../../lib/contentful';
import MainHeader from '../../components/headers/mainheaders';

const FinalistsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const finalistsPerPage = 12;
    const [finalists, setFinalists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const totalPages = Math.ceil(totalItems / finalistsPerPage);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    useEffect(() => {
    const fetchFinalists = async () => {
      setIsLoading(true);
      try {
        const entries = await client.getEntries({
          content_type: 'finalistsProfile',
          limit: finalistsPerPage,
          skip: (currentPage - 1) * finalistsPerPage,
          order: 'fields.name' // optional
        });
        setFinalists(entries.items);
        setTotalItems(entries.total);
      } catch (error) {
        console.error('Error fetching finalists:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFinalists();
  }, [currentPage]);

  return (
    <div className={styles.finalists}>
      <MainHeader />
      <main className={styles.finalists_main}>
         <div className={styles.finalists_hero}>
            <div className={styles.finalists_hero__wrapper}>
                <div className={styles.finalists_hero__content}>
                    <h1>
                        Meet the Class of 2025
                    </h1>
                    <p>
                        Celebrating five years of creativity, growth, and unforgettable memories at the Creative Arts Department, University of Lagos.
                    </p>
                    <div className={styles.arrow}>
                        <FaArrowDown />
                    </div>
                </div>
            </div>
            <div className={styles.finalists_hero__image}>
                <img src="https://www.mmu.ac.uk/sites/default/files/styles/1536px_x2/public/2025-07/6302BAP0987.jpg.webp?itok=vu2Ah6-q" alt="Finalists Hero" />
            </div>
         </div>
         <div className={styles.finalists_breadcrumb}>
            <ul>
                <li>
                    <Link to="/">All</Link>
                </li>
                <li>
                    <Link to="/">Music</Link>
                </li>
                <li>
                    <Link to="/">Theatre</Link>
                </li>
                <li>
                    <Link to="/">Visual Arts</Link>
                </li>
            </ul>
         </div>
         <div className={styles.finalists_grid}>
         <div className={styles.finalists_grid__wrapper}>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            finalists.map((finalist) => {
                const { name, major, image } = finalist.fields;
                const imageUrl = image?.fields?.file?.url;

                return (
                    <Link to={`/finalists/${finalist.fields.slug}`} key={finalist.fields.slug} className={styles.finalist_card}>
                        <figure>
                            <img src={imageUrl} alt={name} />
                        </figure>
                        <div className={styles.finalist_card__content}>
                            <h3>{name}</h3>
                            <p>{major}</p>
                        </div>
                    </Link>
                );
            })
        )}
    </div>
 </div>
 <div className={styles.pagination}>
    <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
        <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? styles.activePage : ''}
        >
            {i + 1}
        </button>
    ))}
    <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
    </button>
 </div>
         <div className={styles.footer}>
            <div className={styles.footer__wrapper}>

            <p>
                &copy; 2025 Creative Arts Department, University of Lagos. All rights reserved.
            </p>
            <ul className={styles.finalists_footer__links}>
                <li>
                    <a href="">
                        <FaTiktok />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p className={styles.finalists_footer__copyright}>
                Built with <span role="img" aria-label="love">❤️</span> by <a href="" target="_blank" rel="noopener noreferrer">Joseph Tunde</a> and <a href="">Tolu Oduro</a>
            </p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default FinalistsPage;