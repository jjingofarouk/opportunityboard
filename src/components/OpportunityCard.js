// components/OpportunityCard.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/OpportunityCard.module.css';

export default function OpportunityCard({ title, description, image, publishedDate, slug }) {
  // Truncate description to ~100 characters or first two sentences
  const truncateDescription = (text) => {
    if (!text) return '';

    // Split by sentences (using periods followed by space or end of string)
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const firstTwoSentences = sentences.slice(0, 2).join(' ');

    // If the first two sentences are too long, truncate to 100 characters
    if (firstTwoSentences.length > 100) {
      return firstTwoSentences.substring(0, 100) + '...';
    }
    return firstTwoSentences;
  };

  return (
    <Link href={`/opportunities/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
            className={styles.image}
            priority={false}
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
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
    </Link>
  );
}