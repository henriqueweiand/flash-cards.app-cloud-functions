/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { IAxiosParams } from './interface';

export class OpenIASuggestion {
  private readonly openIAURL =
    'https://api.openai.com/v1/engines/text-davinci-003-playground/completions';

  async getOpenIA({
    fromLanguage,
    targetLanguage,
    word,
  }: {
    fromLanguage: string;
    targetLanguage: string;
    word: string;
  }): Promise<any> {
    const params = {
      prompt: '',
      temperature: 0.22,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    } as IAxiosParams;

    try {
      const response = await axios.post<any>(`${this.openIAURL}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer AQUIIIII`,
        },
        params,
      });
      return response.data;
    } catch (e) {
      throw new Error();
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
    try {
      const response = await this.getOpenIA({
        fromLanguage,
        targetLanguage,
        word,
      });

      // format the response?

      return response;
    } catch (e) {
      throw new Error();
    }
  }
}
