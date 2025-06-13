import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getOpportunities() {
  const entries = await client.getEntries({ content_type: 'opportunity' });
  return entries.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    description: item.fields.description,
    link: item.fields.link,
  }));
}

export async function getOpportunityBySlug(slug) {
  const entries = await client.getEntries({
    content_type: 'opportunity',
    'fields.slug': slug,
  });
  return entries.items[0].fields;
}

export async function getAllSlugs() {
  const entries = await client.getEntries({ content_type: 'opportunity' });
  return entries.items.map((item) => item.fields.slug);
}
