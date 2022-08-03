import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import usersRouter from './routes/users'
const app = express();

app.use(express.json())


app.use('/users', usersRouter)


app.listen(process.env.API_PORT, () => {
  console.info(`Running API on port ${process.env.API_PORT}`)
})