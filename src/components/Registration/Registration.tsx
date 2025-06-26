import React from 'react';
import styles from '@/styles/registration.module.scss';

interface RegistrationProps {
  id: string;
  title: string;
  content: string;
}

const Registration: React.FC<RegistrationProps> = ({ id, title, content }) => {
  return (
    <section id={id}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Registration;