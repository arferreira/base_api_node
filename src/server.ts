import dotenv from 'dotenv'
dotenv.config()
import app from './app'
import usersRouter from './routes/users'





app.use('/users', usersRouter)



const API_PORT = process.env.API_PORT || 3000

app.listen(API_PORT, () => {
  console.info(`Running API on port ${API_PORT}`)
})