import { getOpportunities } from '../lib/contentful';
import Layout from '../components/Layout';
import OpportunityCard from '../components/OpportunityCard';
import styles from '../styles/Home.module.css';

export default function Home({ opportunities }) {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Welcome to Opportunity Board</h1>
        <p>Discover grants, research opportunities, fellowships, and conferences.</p>
      </section>
      <section className={styles.opportunitiesGrid}>
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.slug}
            title={opportunity.title}
            image={opportunity.image}
            publishedDate={opportunity.publishedDate}
            slug={opportunity.slug}
          />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const opportunities = await getOpportunities();
  return { 
    props: { opportunities },
    revalidate: 3600 // Revalidate every hour
  };
}