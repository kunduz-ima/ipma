import React from 'react';
import styles from '@/styles/organizers.module.scss';

interface OrganizersProps {
  id: string;
  title: string;
  content: string;
}

const Organizers: React.FC<OrganizersProps> = ({ id, title, content }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Organizers;