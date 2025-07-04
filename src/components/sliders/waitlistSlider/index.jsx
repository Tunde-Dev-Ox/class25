import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const sliderData = [
  {
    image: 'https://img.freepik.com/premium-photo/close-up-portrait-man-wearing-hat_1048944-4817727.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Prof. Stephen Olusoji, Dean of Faculty', 
  },
  {
    image: 'https://img.freepik.com/free-photo/worldface-american-man-white-background_53876-31194.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Prof. Albert Oikelome',
  },
  {
    image: 'https://img.freepik.com/free-photo/portrait-young-beautiful-african-girl-dark-wall_176420-5815.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Damilare Ogunmola, Organ Major',
  },
  {
    image: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-posing-studio_23-2149415776.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Oluwaseun Adebayo, Violin Major',
  },
  {
    image: 'https://img.freepik.com/free-photo/handsome-sensitive-man-portrait_23-2149509829.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Seun Jacobs, Organ Major',
  },
  {
    image: 'https://img.freepik.com/free-photo/young-handsome-man-posing-with-hat_23-2148884336.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Ayomide Olakanmi, Voice Major',
  },
  {
    image: 'https://img.freepik.com/free-photo/portrait-man-wearing-eye-shadow_23-2148852583.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Madueke JohnBosco, Voice Major',
  },
  {
    image: 'https://img.freepik.com/premium-photo/afro-american-woman-mixed-race-posing-dark-background-urban-clothes-modern-pretty-smiling_188913-1681.jpg?uid=R101262695&ga=GA1.1.266238237.1746697337&semt=ais_hybrid&w=740',
    text: 'Oluwatomi Akintibu, Voice Major',
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