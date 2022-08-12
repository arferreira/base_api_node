import dotenv from "dotenv";
dotenv.config();
import app from "./app";

import indexRouter from "./routes/index";


app.use(indexRouter);



const API_PORT = process.env.API_PORT || 3000

app.listen(API_PORT, () => {
  console.info(`Running API on port ${API_PORT}`)
})