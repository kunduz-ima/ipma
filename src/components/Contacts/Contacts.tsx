import React from 'react';
import styles from '@/styles/contacts.module.scss';

interface ContactsProps {
  id: string;
  title: string;
  content: string;
}

const Contacts: React.FC<ContactsProps> = ({ id, title, content }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Contacts;