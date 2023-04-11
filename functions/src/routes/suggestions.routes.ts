import { Router } from 'express';
import { SuggestionsController } from '../modules/suggestions/Suggestions.controller';

const suggestionsRoutes = Router();
const suggestionsController = new SuggestionsController();

suggestionsRoutes.post('/word', suggestionsController.word);

export { suggestionsRoutes };
