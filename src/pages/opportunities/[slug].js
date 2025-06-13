import { getOpportunityBySlug, getAllSlugs } from '../../lib/contentful';
import Layout from '../../components/Layout';

export default function OpportunityDetails({ opportunity }) {
  return (
    <Layout>
      <h1>{opportunity.title}</h1>
      <p>{opportunity.description}</p>
      <a href={opportunity.link} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const opportunity = await getOpportunityBySlug(params.slug);
  return { props: { opportunity } };
}