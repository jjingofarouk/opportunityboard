import { getOpportunityBySlug, getAllSlugs } from '../../lib/contentful';
import Layout from '../../components/Layout';

export default function OpportunityDetails({ opportunity }) {
  return (
    <Layout>
      <h1>{opportunity.title}</h1>
      <p>{opportunity.description}</p>
      {opportunity.image && <img src={opportunity.image} alt={opportunity.title} />}
      <p>Deadline: {opportunity.deadline}</p>
      <p>Category: {opportunity.category}</p>
      <p>Location: {opportunity.location}</p>
      <p>Eligibility: {opportunity.eligibility}</p>
      <p>Tags: {opportunity.tags?.join(', ')}</p>
      <p>Published Date: {opportunity.publishedDate}</p>
      <p>Organizer: {opportunity.organizerName}</p>
      <p>Application Process: {opportunity.applicationProcess}</p>
      <p>Contact Email: <a href={`mailto:${opportunity.contactEmail}`}>{opportunity.contactEmail}</a></p>
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