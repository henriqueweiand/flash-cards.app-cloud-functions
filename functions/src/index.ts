import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { validateFirebaseIdToken } from './core/validators/validateFirebaseIdToken';
import { router } from './routes';

admin.initializeApp();

const app = express();

app.use(cookieParser());
app.use(cors({ origin: true }));
app.use(validateFirebaseIdToken);
app.use(router);

exports.app = functions.https.onRequest(app);
