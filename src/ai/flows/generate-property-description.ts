'use server';

/**
 * @fileOverview Generates an engaging and informative property description using AI.
 *
 * - generatePropertyDescription - A function that generates a property description.
 * - GeneratePropertyDescriptionInput - The input type for the generatePropertyDescription function.
 * - GeneratePropertyDescriptionOutput - The return type for the generatePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertyDescriptionInputSchema = z.object({
  name: z.string().describe('The name of the property.'),
  address: z.string().describe('The address of the property.'),
  price: z.number().describe('The price of the property.'),
  bedrooms: z.number().describe('The number of bedrooms in the property.'),
  bathrooms: z.number().describe('The number of bathrooms in the property.'),
  yearBuilt: z.number().describe('The year the property was built.'),
});

export type GeneratePropertyDescriptionInput = z.infer<
  typeof GeneratePropertyDescriptionInputSchema
>;

const GeneratePropertyDescriptionOutputSchema = z.object({
  description: z.string().describe('The AI-generated description of the property.'),
});

export type GeneratePropertyDescriptionOutput = z.infer<
  typeof GeneratePropertyDescriptionOutputSchema
>;

export async function generatePropertyDescription(
  input: GeneratePropertyDescriptionInput
): Promise<GeneratePropertyDescriptionOutput> {
  return generatePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertyDescriptionPrompt',
  input: {schema: GeneratePropertyDescriptionInputSchema},
  output: {schema: GeneratePropertyDescriptionOutputSchema},
  prompt: `You are a real estate expert. Generate an engaging and informative description of the property based on the following information:

Name: {{{name}}}
Address: {{{address}}}
Price: {{{price}}}
Bedrooms: {{{bedrooms}}}
Bathrooms: {{{bathrooms}}}
Year Built: {{{yearBuilt}}}

Description:`,
});

const generatePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePropertyDescriptionFlow',
    inputSchema: GeneratePropertyDescriptionInputSchema,
    outputSchema: GeneratePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
