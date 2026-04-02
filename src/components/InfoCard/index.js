import React from "react";
import ImageGallery from "@site/src/components/ImageGallery";
import styles from "./styles.module.css";

export default function InfoCard({ title, image, alt, images }) {
  const hasGallery = images && images.length > 0;

  return (
    <div className={styles.infoCard} data-card="info">
      {title && <h4 className={styles.infoTitle}>{title}</h4>}
      {hasGallery ? (
        <ImageGallery images={images} />
      ) : (
        image && (
          <img
            src={image}
            alt={alt || title}
            className={styles.infoImage}
            loading="lazy"
          />
        )
      )}
    </div>
  );
}
