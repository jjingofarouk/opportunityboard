import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/OpportunityCard.module.css';

export default function OpportunityCard({ title, description, image, publishedDate, slug }) {
  // Truncate description to ~80 characters
  const truncateDescription = (text) => {
    if (!text) return '';
    return text.length > 80 ? `${text.substring(0, 80)}...` : text;
  };

  return (
    <Link href={`/opportunities/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholderImage}>No Image</div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{truncateDescription(description)}</p>
        <p className={styles.date}>
          {new Date(publishedDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
    </Link>
  );
}