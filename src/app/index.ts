import express from 'express';
import appConfig from '@config/index';

const app = express();

appConfig(app);

export default app;
