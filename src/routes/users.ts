import express from "express"
import { createUserController } from "src/useCases/CreateUser"


const router = express.Router()


// Routes to users register
router.post('/register', (req, res) => {
  return createUserController.handle(req, res);
})

// router.post('/', (req, res) => {
//   return res.json({ message: 'ok' });
// })


export default router