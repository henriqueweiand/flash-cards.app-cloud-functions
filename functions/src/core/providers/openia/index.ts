/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { ResponseChatGPT, TranslationOptionsResponse } from './interface';

export class OpenIASuggestion {
  private readonly openIAURL = process.env.OPENIA_URL;
  private readonly TOKEN = process.env.OPENIA_TOKEN;

  async getOpenIA({
    fromLanguage,
    targetLanguage,
    word,
  }: {
    fromLanguage: string;
    targetLanguage: string;
    word: string;
  }): Promise<ResponseChatGPT> {
    try {
      const response = await axios.post<ResponseChatGPT>(
        `${this.openIAURL}`,
        {
          prompt: `return a JSON of four right translation options for the word “${word}” from ${fromLanguage} into ${targetLanguage} and then more four wrong options. Use index called right and wrong. don't send anything else`,
          temperature: 0.22,
          max_tokens: 500,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.TOKEN}`,
          },
        },
      );

      return response.data;
    } catch (e) {
      throw new Error(`There was an error to request chatgpt3 api`);
    }
  }

  async getWord({
    fromLanguage,
    targetLanguage,
    word,
  }: {
    fromLanguage: string;
    targetLanguage: string;
    word: string;
  }) {
    const response = await this.getOpenIA({
      fromLanguage,
      targetLanguage,
      word,
    });

    try {
      if (response.choices.length > 0) {
        const values = response.choices[0];

        const jsonMatch = values.text.match(/\{.*\}/s);

        if (jsonMatch) {
          const jsonString = jsonMatch[0].trim();
          return JSON.parse(jsonString) as TranslationOptionsResponse;
        } else {
          throw new Error(`The JSON was not found ${values.text}`);
        }
      } else {
        throw new Error(`There is no choises in the response`);
      }
    } catch (e) {
      throw new Error(`There was an error to decode the response text`);
    }
  }
}
