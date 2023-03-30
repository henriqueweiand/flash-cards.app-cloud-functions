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

  async getDefinition() {
    // word - ?clientId=-2191095942591596258&limit=3&defLang=pt&localTermId=-1&prefix=hear&wordLang=en

    try {
      const response = await this.getQuizlet({
        type: 'definition',
        wordLang: 'en',
        defLang: 'pt',
        prefix: '',
        word: 'love',
      });

      return response;
    } catch (e) {
      throw new Error();
    }
  }

  async getWord() {
    // word - ?clientId=-2191095942591596258&limit=3&defLang=pt&localTermId=-1&prefix=hear&wordLang=en

    try {
      const response = await this.getQuizlet({
        type: 'word',
        wordLang: 'en',
        defLang: 'pt',
        prefix: 'hear',
      });

      return response;
    } catch (e) {
      throw new Error();
    }
  }
}
