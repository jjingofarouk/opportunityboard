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

  const fallbackImage = '/images/opportunity-placeholder.jpg';

  return (
    <Link href={`/opportunity/${slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={image || fallbackImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          
          {description && (
            <p className={styles.description}>
              {description.substring(0, 100)}
              {description.length > 100 ? '...' : ''}
            </p>
          )}
          
          {publishedDate && (
            <div className={styles.publishedDate}>
              <Clock size={16} />
              <span>{formatDate(publishedDate)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}