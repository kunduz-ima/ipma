import React from "react";
import styles from "@/styles/programs.module.scss";
import Image from "next/image";

interface ProgramPhoto {
  url: string;
  alt: string;
}

interface ProgramEvent {
  startTime?: string;
  endTime?: string;
  title?: string;
  description?: string;
}

interface ProgramsProps {
  title: string;
  photos: ProgramPhoto[];
  events: ProgramEvent[];
}

const Programs: React.FC<ProgramsProps> = ({ title, photos = [], events }) => {
  return (
    <section id="programs">
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.programs}>
        <div className={styles.eventsList}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventItem}>
              {(event.startTime || event.endTime) && (
                <div className={styles.timeBlock}>
                  {event.startTime && (
                    <div className={styles.time}>{event.startTime}</div>
                  )}
                  {event.endTime && (
                    <div className={styles.time}>{event.endTime}</div>
                  )}
                </div>
              )}

              {event.title && (
                <div className={styles.content}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 2 Photos Section */}
        {photos.length > 0 && (
  <div className={styles.photosRow}>
    {photos.map((photo, index) => (
      <div 
        key={index} 
        className={styles.photoWrapper}
      >
        <Image
          src={photo.url}
          alt={photo.alt}
          width={434}
          height={612}
          className={styles.photo}
        />
      </div>
    ))}
  </div>
)}

      </div>
    </section>
  );
};

export default Programs;
