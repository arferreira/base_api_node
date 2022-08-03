import express from 'express'
import appConfig from '../app/config'

const app = express()

appConfig(app)

export default app