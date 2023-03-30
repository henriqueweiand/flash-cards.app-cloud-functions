import { Router } from 'express';
import { SuggestionsController } from '../modules/suggestions/Suggestions.controller';

const suggestionsRoutes = Router();
const suggestionsController = new SuggestionsController();

suggestionsRoutes.get('/word', suggestionsController.word);
suggestionsRoutes.get('/definition', suggestionsController.definition);

export { suggestionsRoutes };
