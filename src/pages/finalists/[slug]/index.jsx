import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client from '../../../lib/contentful';
import styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MainHeader from '../../../components/headers/mainheaders';


const FinalistProfile = () => {
  const { slug } = useParams();
  const [finalist, setFinalist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinalist = async () => {
      try {
        const res = await client.getEntries({
          content_type: 'finalistsProfile',
          'fields.slug': slug,
          limit: 1,
        });

        if (res.items.length > 0) {
          setFinalist(res.items[0].fields);
        }
      } catch (err) {
        console.error('Error fetching finalist by slug:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFinalist();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!finalist) return <p>Finalist not found.</p>;

  return (
    <div className={styles.profile}>
      <MainHeader />
      <main className={styles.profile_main}>
        <div className={styles.profile_header}>
          <h1>{finalist.name}</h1>
          <p className={styles.profile_subtitle}>
            Celebrating {finalist.name}&#39;s journey at the Creative Arts Department, University of Lagos.
           </p>
           <p className={styles.profile_degree}>B.A. in {finalist.category}</p>
           <p className={styles.profile_major}>{finalist.major} Major</p>
        </div>
        <div className={styles.profile_top}>
            <div className={styles.profile_top__wrapper}>
                <p className={styles.profile_why__creative_arts}>
                    {finalist.whycreativeart}
                </p>
                {finalist.image && (
                <img
                    src={finalist.image.fields.file.url}
                    alt={finalist.name}
                    className={styles.profileImage}
                />
               )}
            </div>
        </div>
        <div className={styles.profile_content}>
            <div className={styles.profile_content__wrapper}>
                <h2>
                    Bio
                </h2>
                {finalist.bio && (
                    <div className={styles.bio}>
                        {documentToReactComponents(finalist.bio)}
                    </div>
                )}
                <h2>
                    Projects
                </h2>
                <h2>
                    Why Creative Arts?
                </h2>
                {finalist.whycreativeart && (
                    <div className={styles.whyCreativeArts}>
                        {finalist.whycreativeart}
                    </div>
                )}
                <h2>
                    My biggest inspiration
                </h2>
                {finalist.inspiration && (
                    <div className={styles.biggestInspiration}>
                        {finalist.inspiration}
                    </div>
                )}
            </div>
        </div>
      </main>
    </div>
  );
};

export default FinalistProfile;
