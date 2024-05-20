import { type SchemaTypeDefinition } from 'sanity';
import banner from './schemas/banner';
import product from './schemas/product';
import category from './schemas/category';
import blockContent from './schemas/blockContent';
import order from './schemas/order';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [banner, product, category, blockContent, order],
};
