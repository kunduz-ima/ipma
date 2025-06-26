"use client";

import React from 'react'
import styles from "@/styles/hero.module.scss";

interface HeroData {
  title: string;
  imageUrl: string;
}

interface HeroProps {
  heroData: HeroData;
}

const Hero: React.FC<HeroProps> = ({heroData}) => {
  return (
    <div>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{heroData.title}</h1>
      </div>
    </div>
  )
}

export default Hero
