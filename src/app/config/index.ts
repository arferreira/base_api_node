import express, { Express } from "express";
import cors from "cors";
import connectToMongoDb from "../../database";

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../swagger.json';

export default function appConfig(app: Express): void {
  connectToMongoDb()
  app.use(cors())
  app.use(express.json())
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
}
