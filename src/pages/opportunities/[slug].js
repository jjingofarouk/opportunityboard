import { getOpportunityBySlug, getAllSlugs } from '../../lib/contentful;
import styles from '../../styles/OpportunityDetail.module.css';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Clock, 
  Building, 
  Mail, 
  Tag,
  Globe,
  Users,
  FileText,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

export default function OpportunityDetail({ opportunity }) {
  if (!opportunity) return null;

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
      <div className={styles.wrapper}>
        <article className={styles.container}>
          <div className={styles.heroSection}>
            <div className={styles.imageWrapper}>
              {opportunity.image ? (
                <Image
                  src={opportunity.image}
                  alt={opportunity.title}
                  fill
                  priority
                  className={styles.coverImage}
                />
              ) : (
                <div className={styles.placeholderImage}>
                  <Globe size={64} className={styles.placeholderIcon} />
                </div>
              )}
            </div>

            <div className={styles.heroContent}>
              {opportunity.category && (
                <span className={styles.category}>{opportunity.category}</span>
              )}
              <h1 className={styles.title}>{opportunity.title}</h1>
              
              {opportunity.tag && opportunity.tag.length > 0 && (
                <div className={styles.tags}>
                  {opportunity.tag.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.content}>
            <aside className={styles.sidebar}>
              <div className={styles.metadataCard}>
                {opportunity.organizerName && (
                  <div className={styles.metaItem}>
                    <Building className={styles.metaIcon} />
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>Organizer</span>
                      <span className={styles.metaValue}>{opportunity.organizerName}</span>
                    </div>
                  </div>
                )}

                {opportunity.location && (
                  <div className={styles.metaItem}>
                    <MapPin className={styles.metaIcon} />
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>Location</span>
                      <span className={styles.metaValue}>{opportunity.location}</span>
                    </div>
                  </div>
                )}

                {opportunity.deadline && (
                  <div className={styles.metaItem}>
                    <Calendar className={styles.metaIcon} />
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>Deadline</span>
                      <span className={styles.metaValue}>{formatDate(opportunity.deadline)}</span>
                    </div>
                  </div>
                )}

                {opportunity.publishedDate && (
                  <div className={styles.metaItem}>
                    <Clock className={styles.metaIcon} />
                    <div className={styles.metaContent}>
                      <span className={styles.metaLabel}>Posted</span>
                      <span className={styles.metaValue}>{formatDate(opportunity.publishedDate)}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.actions}>
                {opportunity.link && (
                  <a 
                    href={opportunity.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    <span>Apply Now</span>
                    <ExternalLink size={20} />
                  </a>
                )}
                
                {opportunity.contactEmail && (
                  <a 
                    href={`mailto:${opportunity.contactEmail}`}
                    className={styles.secondaryButton}
                  >
                    <Mail size={20} />
                    <span>Contact Organizer</span>
                  </a>
                )}
              </div>
            </aside>

            <div className={styles.mainContent}>
              {opportunity.description && (
                <section className={styles.section}>
                  <h2><FileText size={24} /> Overview</h2>
                  <p>{opportunity.description}</p>
                </section>
              )}

              {opportunity.eligibility && (
                <section className={styles.section}>
                  <h2><Users size={24} /> Eligibility</h2>
                  <p>{opportunity.eligibility}</p>
                </section>
              )}

              {opportunity.applicationProcess && (
                <section className={styles.section}>
                  <h2><ChevronRight size={24} /> Application Process</h2>
                  <p>{opportunity.applicationProcess}</p>
                </section>
              )}
            </div>
          </div>
        </article>
      </div>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const opportunity = await getOpportunityBySlug(params.slug);
  
  if (!opportunity) {
    return {
      notFound: true
    };
  }

  return {
    props: { opportunity },
    revalidate: 3600
  };
}