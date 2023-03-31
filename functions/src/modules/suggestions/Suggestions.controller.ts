/* eslint-disable no-console */
import { Request, Response } from 'express';
import { QuizletSuggestion } from '../../core/providers/suggestions';

const providerSuggestions = new QuizletSuggestion();

interface SuggestionsRequest {
  type: 'definition' | 'word';
  wordLang: string;
  defLang: string;
  word: string;
  prefix?: string;
}

class SuggestionsController {
  async word(request: Request<SuggestionsRequest>, response: Response) {
    const params = request.body;
    const wordSuggestions = await providerSuggestions.getWord(params);

    return response.status(200).json(wordSuggestions);
  }

  async definition(request: Request<SuggestionsRequest>, response: Response) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { prefix, ...params } = request.body;
    const definitionSuggestions = await providerSuggestions.getDefinition(
      params,
    );

    return response.status(200).json(definitionSuggestions);
  }
}

export { SuggestionsController };
