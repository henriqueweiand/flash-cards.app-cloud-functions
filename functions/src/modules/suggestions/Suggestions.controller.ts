import { Request, Response } from 'express';
import { QuizletSuggestion } from '../../core/providers/suggestions';

const providerSuggestions = new QuizletSuggestion();

class SuggestionsController {
  word(request: Request, response: Response): Response {
    const wordSuggestions = providerSuggestions.getWord();

    return response.status(200).json(wordSuggestions);
  }

  definition(request: Request, response: Response): Response {
    const definitionSuggestions = providerSuggestions.getDefinition();

    return response.status(200).json(definitionSuggestions);
  }
}

export { SuggestionsController };
