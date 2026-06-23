import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const experiences = defineCollection({
	loader: glob({ base: './src/content/experiences', pattern: '**/*.md' }),
	schema: z.object({
		companyName: z.string(),
		companyLocation: z.string(),
		companyDescription: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		jobPosition: z.string(),
	}),
});

const certificates = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
	schema: z.object({
		topics: z.string().array(),
		author: z.string(),
		year: z.number().int(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
});

export const collections = { experiences, certificates, projects };
