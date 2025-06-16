import { getOpportunities } from '../lib/contentful';
import Layout from '../components/Layout';
import OpportunityCard from '../components/OpportunityCard';
import styles from '../styles/Home.module.css';

export default function Home({ opportunities }) {
  return (
    <Layout>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Welcome to Opportunity Board</h1>
            <p className={styles.heroDescription}>
              Discover research opportunities, fellowships, and funding worldwide
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className={styles.categories}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Browse by Category</h2>
            <div className={styles.categoryGrid}>
              {['Grants', 'Scholarships', 'Fellowships', 'Conferences'].map((category) => (
                <div key={category} className={styles.categoryCard}>
                  <h3 className={styles.categoryTitle}>{category}</h3>
                  <p className={styles.categoryCount}>View all</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Opportunities Section */}
        <section className={styles.latestOpportunities}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Latest Opportunities</h2>
            <div className={styles.opportunitiesGrid}>
              {opportunities?.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.slug}
                  title={opportunity.title}
                  description={opportunity.description}
                  image={opportunity.image}
                  publishedDate={opportunity.publishedDate}
                  slug={opportunity.slug}
                />
              ))}
            </div>
            {(!opportunities || opportunities.length === 0) && (
              <div className={styles.emptyState}>
                <p>No opportunities available at the moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const opportunities = await getOpportunities();
    return {
      props: {
        opportunities: opportunities.slice(0, 6), // Show only the 6 latest opportunities
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    return {
      props: {
        opportunities: [],
      },
      revalidate: 3600,
    };
  }
}