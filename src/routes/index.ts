import express from "express";



const router = express.Router();


// Routes to users register
router.post('/', (req, res) => {
  return res.json({ message: 'Endpoint root' });
})

export default router