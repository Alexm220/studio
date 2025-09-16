'use server';

import { generatePropertyDescription as generateDescriptionFlow } from '@/ai/flows/generate-property-description';
import type { GeneratePropertyDescriptionInput } from '@/ai/flows/generate-property-description';

export async function generatePropertyDescriptionAction(
  input: GeneratePropertyDescriptionInput
): Promise<{ description: string } | { error: string }> {
  try {
    const result = await generateDescriptionFlow(input);
    return { description: result.description };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate description. Please try again.' };
  }
}
