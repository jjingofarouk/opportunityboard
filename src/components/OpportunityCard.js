import styles from '../styles/OpportunityCard.module.css';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OpportunityCard({
  title,
  description,
  image,
  publishedDate,
  slug
}) {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const fallbackImage = '/images/placeholder.jpg';

  return (
    <Link href={`/opportunities/${slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={image || fallbackImage}
            alt={title}
            width={80} // Square image
            height={80} // Square image
            className={styles.image}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
          {publishedDate && (
            <div className={styles.publishedDate}>
              <Clock size={14} />
              <span>{formatDate(publishedDate)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}