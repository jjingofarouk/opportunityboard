import styles from '../styles/OpportunityCard.module.css';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OpportunityCard({ 
  title,
  image,
  publishedDate,
  slug
}) {
  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/opportunity/${slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholderImage}>
              <span>No Image Available</span>
            </div>
          )}
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          
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