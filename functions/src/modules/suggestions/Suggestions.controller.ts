/* eslint-disable no-console */
import { Request, Response } from 'express';
import { OpenIASuggestion } from '../../core/providers/openia';

const providerSuggestions = new OpenIASuggestion();

interface SuggestionsRequest {
  fromLanguage: string;
  targetLanguage: string;
  word: string;
}

class SuggestionsController {
  async word(request: Request<SuggestionsRequest>, response: Response) {
    const params = request.body as SuggestionsRequest;

    if (!!params.fromLanguage && !!params.targetLanguage && !!params.word) {
      const wordSuggestions = await providerSuggestions.getWord(params);
      return response.status(200).json(wordSuggestions);
    } else {
      return response.status(422).json({});
    }
  }
}

export { SuggestionsController };
