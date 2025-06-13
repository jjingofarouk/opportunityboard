import { useState, useEffect } from 'react';
import { getOpportunities } from '../lib/contentful';

export default function useFetchOpportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOpportunities();
        setOpportunities(data);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { opportunities, loading };
}
