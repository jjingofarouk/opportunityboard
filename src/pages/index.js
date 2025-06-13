import { getOpportunities } from '../lib/contentful';
import Layout from '../components/Layout';
import OpportunityCard from '../components/OpportunityCard';

export default function Home({ opportunities }) {
  return (
    <Layout>
      <section>
        <h1>Welcome to Opportunity Board</h1>
        <p>Discover grants, research opportunities, fellowships, and conferences.</p>
      </section>
      <section>
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.slug}
            title={opportunity.title}
            description={opportunity.description}
            link={`/opportunities/${opportunity.slug}`}
          />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const opportunities = await getOpportunities();
  return { props: { opportunities } };
}
