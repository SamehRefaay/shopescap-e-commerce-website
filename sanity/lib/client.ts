import { createClient, groq } from 'next-sanity';

import { apiVersion, dataset, projectId, token, useCdn } from '../env';

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	token,
	useCdn,
});
