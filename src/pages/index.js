import { getOpportunities } from '../lib/contentful';
import Layout from '../components/Layout';
import OpportunityCard from '../components/OpportunityCard';
import styles from '../styles/Home.module.css';

export default function Home({ opportunities }) {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Welcome to Opportunity Board</h1>
        <p>Discover research opportunities, fellowships, and funding worldwide</p>
      </section>

      <section className={styles.categories}>
        <div className={styles.categoryGrid}>
          {['Grants', 'Scholarships', 'Fellowships', 'Conferences'].map((category) => (
            <div key={category} className={styles.categoryCard}>
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.latestOpportunities}>
        <h2>Latest Opportunities</h2>
        <div className={styles.opportunitiesGrid}>
          {opportunities.map((opportunity) => (
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
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const opportunities = await getOpportunities();
  return {
    props: {
      opportunities: opportunities.slice(0, 6), // Show only the 6 latest opportunities
    },
    revalidate: 3600, // Revalidate every hour
  };
}