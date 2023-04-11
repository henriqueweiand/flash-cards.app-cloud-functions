import { Router } from 'express';

import { defaultRoutes } from './default.routes';
import { suggestionsRoutes } from './suggestions.routes';

const router = Router();

router.use('/', defaultRoutes);
router.use('/suggestions', suggestionsRoutes);

export { router };
