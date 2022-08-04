import express from "express"
import { createUserController } from "src/useCases/CreateUser"


const router = express.Router()


// Routes to users
router.post('/register', (req, res) => {
  return createUserController.handle(req, res);
})

// removed route

export default router