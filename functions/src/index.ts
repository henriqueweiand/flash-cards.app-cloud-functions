import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { validateFirebaseIdToken } from './core/validators/validateFirebaseIdToken';
import { router } from './routes';

admin.initializeApp();

const app = express();

Sentry.init({
  dsn: 'https://db9dc9e5a513406b898392b20c83e6d7@o186699.ingest.sentry.io/4504964442357760',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(cookieParser());
app.use(cors({ origin: true }));
app.use(validateFirebaseIdToken);
app.use(router);

app.use(Sentry.Handlers.errorHandler());

exports.app = functions.https.onRequest(app);
