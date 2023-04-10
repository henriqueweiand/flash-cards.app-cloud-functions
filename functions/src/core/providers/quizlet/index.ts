import axios from 'axios';
import {
  PrefixSuggestionsResponse,
  WordSuggestionsResponse,
  IAxiosParams,
} from './interface';

export class QuizletSuggestion {
  private readonly accounts: string[] = ['-2191095942591596258'];
  private readonly quizletURL = 'https://quizlet.com/webapi/3.2/suggestions/';

  async getQuizlet({
    type,
    wordLang = 'en',
    defLang = 'pt',
    prefix = '',
    word = '',
  }: {
    type: 'definition' | 'word';
    wordLang: string;
    defLang: string;
    prefix?: string;
    word?: string;
  }): Promise<PrefixSuggestionsResponse | WordSuggestionsResponse | undefined> {
    let params = {
      clientId: this.accounts[0],
      limit: 3,
      localTermId: '-1',
      wordLang,
      defLang,
      prefix,
    } as IAxiosParams;

    if (type === 'definition') {
      params = {
        ...params,
        word,
      };
    }

    try {
      const response = await axios.get<
        PrefixSuggestionsResponse | WordSuggestionsResponse | undefined
      >(`${this.quizletURL}${type}`, {
        params,
      });
      return response.data;
    } catch (e) {
      throw new Error();
    }
  }

  async getDefinition({
    type,
    wordLang,
    defLang,
    word,
  }: {
    type: 'definition' | 'word';
    wordLang: string;
    defLang: string;
    word: string;
  }) {
    // word - ?clientId=-2191095942591596258&limit=3&defLang=pt&localTermId=-1&prefix=hear&wordLang=en

    try {
      const response = await this.getQuizlet({
        type,
        wordLang,
        defLang,
        word,
        prefix: '',
      });

      return response;
    } catch (e) {
      throw new Error();
    }
  }

  async getWord({
    type,
    wordLang,
    defLang,
    prefix,
  }: {
    type: 'definition' | 'word';
    wordLang: string;
    defLang: string;
    prefix: string;
    word: string;
  }) {
    // word - ?clientId=-2191095942591596258&limit=3&defLang=pt&localTermId=-1&prefix=hear&wordLang=en

    try {
      const response = await this.getQuizlet({
        type,
        wordLang,
        defLang,
        prefix,
      });

      return response;
    } catch (e) {
      throw new Error();
    }
  }
}
