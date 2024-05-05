import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description: 'keep the title relative to product',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'color',
			title: 'Color',
			type: 'string',
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'rowprice',
			title: 'Row Price',
			type: 'number',
		}),
		defineField({
			name: 'ratings',
			title: 'Ratings',
			type: 'number',
			description: 'Ratings must be equal or below 5',
		}),
		defineField({
			name: 'isnew',
			title: 'New Arrival',
			type: 'boolean',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		}),
		defineField({
			name: 'position',
			title: 'Position',
			type: 'string',
		}),
		defineField({
			name: 'brand',
			title: 'Brand',
			type: 'string',
			validation: rule => rule.required(),
		}),
		defineField({
			name: 'quantity',
			title: 'Quantity',
			type: 'number',
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
			position: 'position',
		},
	},
});
