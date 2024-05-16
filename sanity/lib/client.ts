import { createClient, groq } from 'next-sanity';

import { apiVersion, dataset, projectId, token, useCdn } from '../env';
import { ProductProps } from '../../src/lib/type';

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	token,
	useCdn,
});
