import { rule } from 'postcss';
import { title } from 'process';
import { defineField, defineType } from 'sanity';

export default defineType({
	type: 'document',
	name: 'banner',
	title: 'Banner',
	fields: [
		defineField({
			name: 'title',
			title: 'Banner Title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			description: 'Banner Image',
			type: 'image',
			validation: rule => rule.required(),
			options: { hotspot: true },
			preview: {
				select: {
					imageUrl: 'asset.url',
					title: 'caption',
				},
			},
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
});
