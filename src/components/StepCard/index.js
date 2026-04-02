import React from "react";
import ImageGallery from "@site/src/components/ImageGallery";
import styles from "./styles.module.css";

export default function StepCard({ step, title, images }) {
  return (
    <div className={styles.stepCard} data-card="step">
      <div className={styles.stepHeader}>
        <span className={styles.stepNumber}>{step}</span>
        <h3 className={styles.stepTitle}>{title}</h3>
      </div>
      {images && images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
}
