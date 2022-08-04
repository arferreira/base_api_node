import express from "express"
import { createUserController } from "src/useCases/CreateUser"


const router = express.Router()


// Routes to users register
router.post('/register', (req, res) => {
  return createUserController.handle(req, res);
})


export default router