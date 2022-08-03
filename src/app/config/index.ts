import express, { Express } from "express";
import cors from "cors";
import connectToMongoDb from "../../database";

export default function appConfig(app: Express): void {
  connectToMongoDb()
  app.use(cors())
  app.use(express.json())
}
