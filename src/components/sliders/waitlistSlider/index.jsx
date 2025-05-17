import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const sliderData = [
  {
    image: 'https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Vetted cleaners trained for Airbnb standards',
  },
  {
    image: 'https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'On-time, same-day, or scheduled ahead',
  },
  {
    image: 'https://images.unsplash.com/photo-1684182309189-a1384f3d7d4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Cleaners send photo proof when done',
  },
  {
    image: 'https://images.unsplash.com/photo-1556740720-776b84291f8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Transparent pricing. Pay per clean. No stress.',
  },
  {
    image: 'https://images.pexels.com/photos/3038552/pexels-photo-3038552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    text: 'Works for one unit or 100+ properties',
  },
];

const WaitlistSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === sliderData.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ''
          }`}
        >
          <img src={item.image} alt="cleaning" />
          <div className={styles.features}>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaitlistSlider;