import styles from '../styles/OpportunityCard.module.css';
import { Calendar, MapPin, Tag, Clock, Building, Mail } from 'lucide-react';
import Link from 'next/link';

export default function OpportunityCard({ 
  title,
  description,
  deadline,
  category,
  location,
  tag,
  publishedDate,
  organizerName,
  contactEmail,
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
        {/* Category and Tags Section */}
        <div className={styles.cardHeader}>
          {category && (
            <span className={styles.category}>
              {category}
            </span>
          )}
          {tag && tag.length > 0 && (
            <div className={styles.tags}>
              {tag.slice(0, 2).map((t, index) => (
                <span key={index} className={styles.tag}>
                  <Tag size={14} />
                  {t}
                </span>
              ))}
              {tag.length > 2 && (
                <span className={styles.tagCount}>+{tag.length - 2}</span>
              )}
            </div>
          )}
        </div>

        {/* Title and Description */}
        <h2 className={styles.title}>{title}</h2>
        {description && (
          <p className={styles.description}>
            {description.length > 150 
              ? `${description.substring(0, 150)}...` 
              : description}
          </p>
        )}

        {/* Meta Information */}
        <div className={styles.metaInfo}>
          {organizerName && (
            <div className={styles.metaItem}>
              <Building size={16} />
              <span>{organizerName}</span>
            </div>
          )}
          {location && (
            <div className={styles.metaItem}>
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Footer Information */}
        <div className={styles.cardFooter}>
          {deadline && (
            <div className={styles.deadline}>
              <Calendar size={16} />
              <span>Deadline: {formatDate(deadline)}</span>
            </div>
          )}
          {publishedDate && (
            <div className={styles.published}>
              <Clock size={16} />
              <span>Posted: {formatDate(publishedDate)}</span>
            </div>
          )}
        </div>

        {/* Contact Information */}
        {contactEmail && (
          <div className={styles.contactInfo}>
            <Mail size={16} />
            <span>{contactEmail}</span>
          </div>
        )}
      </div>
    </Link>
  );
}