import React from 'react';
import styles from '@/styles/speakers.module.scss';

interface Speaker {
  id: number;
  name: string;
  title: string;
  image: {
    url: string;
  };
}

interface SpeakersProps {
  id: string;
  title: string;
  speakersList: Speaker[];
}

const Speakers: React.FC<SpeakersProps> = ({ id, title, speakersList }) => {
  return (
    <section id={id} className={styles.speakersSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        
        <div className={styles.speakersGrid}>
          {speakersList.map((speaker) => (
            <div key={speaker.id} className={styles.speakerCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={speaker.image.url} 
                  alt={speaker.name} 
                  className={styles.speakerImage}
                />
              </div>
              <div className={styles.speakerContent}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <p className={styles.speakerTitle}>{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;