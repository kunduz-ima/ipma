"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/header.module.scss";
import logo from "../../../public/assets/logo.png";

interface NavigationItem {
  label: string;
  targetId: string;
}

interface HeaderProps {
  navigation: NavigationItem[];
}


const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.header}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="IPMA Logo" width={180} height={85} priority />
        </div>

        <ul className={styles.navLinks}>
          {navigation.map((item) => (
            <li key={item.targetId}>
              <button
                onClick={() => scrollToSection(item.targetId)}
                className={styles.navLink}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actionButtons}>
          <button className={styles.primaryButton}>Связаться</button>
          <button className={styles.secondaryButton}>Регистрация</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;