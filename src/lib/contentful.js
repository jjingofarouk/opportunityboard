import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Get all opportunities with all relevant fields
export async function getOpportunities() {
  const entries = await client.getEntries({ content_type: 'opportunity' });
  return entries.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    description: item.fields.description,
    link: item.fields.link,
    image: item.fields.image?.fields?.file?.url ?? null,
    deadline: item.fields.deadline ?? null,
    category: item.fields.category ?? null,
    location: item.fields.location ?? null,
    eligibility: item.fields.eligibility ?? null,
    tags: item.fields.tags ?? [],
    publishedDate: item.fields.publishedDate ?? null,
    organizerName: item.fields.organizerName ?? null,
    applicationProcess: item.fields.applicationProcess ?? null,
    contactEmail: item.fields.contactEmail ?? null,
  }));
}

// Get all slugs for dynamic routes
export async function getAllSlugs() {
  const entries = await client.getEntries({
    content_type: 'opportunity',
    select: 'fields.slug',
  });
  return entries.items.map((item) => item.fields.slug);
}

// Get a single opportunity by slug, with all fields
export async function getOpportunityBySlug(slug) {
  const entries = await client.getEntries({
    content_type: 'opportunity',
    'fields.slug': slug,
    limit: 1,
  });
  if (!entries.items.length) {
    return null;
  }
  const item = entries.items[0];
  return {
    slug: item.fields.slug,
    title: item.fields.title,
    description: item.fields.description,
    link: item.fields.link,
    image: item.fields.image?.fields?.file?.url ?? null,
    deadline: item.fields.deadline ?? null,
    category: item.fields.category ?? null,
    location: item.fields.location ?? null,
    eligibility: item.fields.eligibility ?? null,
    tags: item.fields.tags ?? [],
    publishedDate: item.fields.publishedDate ?? null,
    organizerName: item.fields.organizerName ?? null,
    applicationProcess: item.fields.applicationProcess ?? null,
    contactEmail: item.fields.contactEmail ?? null,
  };
}