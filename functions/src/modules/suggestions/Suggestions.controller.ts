/* eslint-disable no-console */
import { Request, Response } from 'express';
import { QuizletSuggestion } from '../../core/providers/suggestions';

const providerSuggestions = new QuizletSuggestion();

class SuggestionsController {
  async word(request: Request, response: Response) {
    const wordSuggestions = await providerSuggestions.getWord();

    return response.status(200).json(wordSuggestions);
  }

  async definition(request: Request, response: Response) {
    const definitionSuggestions = await providerSuggestions.getDefinition();

    return response.status(200).json(definitionSuggestions);
  }
}

export { SuggestionsController };
