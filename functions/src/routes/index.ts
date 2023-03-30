import { Router } from 'express';

import { suggestionsRoutes } from './suggestions.routes';

const router = Router();

router.use('/suggestions', suggestionsRoutes);

export { router };
