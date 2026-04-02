import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ImageGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.gallery}>
      <div
        className={styles.galleryImage}
        onClick={() => setActive((active + 1) % images.length)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight")
            setActive((active + 1) % images.length);
          if (e.key === "ArrowLeft")
            setActive((active - 1 + images.length) % images.length);
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`${styles.galleryImg} ${i === active ? styles.galleryImgActive : ""}`}
            loading="lazy"
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className={styles.dotsRow}>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
          <span className={styles.counter}>{active + 1} of {images.length}</span>
        </div>
      )}
    </div>
  );
}
