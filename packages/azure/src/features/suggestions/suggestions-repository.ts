import {openai} from '../../lib/openai';

export const suggestionsGetRepository = async (): Promise<string> => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt:
        'Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.',
      max_tokens: 100,
      temperature: 0.8,
    });
    const text = response.data.choices[0].text;

    if (typeof text !== 'string') {
      return 'Error: No text returned from OpenAI';
    }

    return text.trim();
  } catch (error) {
    return JSON.stringify(error);
  }
};
