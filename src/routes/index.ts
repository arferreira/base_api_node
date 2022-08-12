import express from "express";



const router = express.Router();


// Routes to users register
router.get('/', (req, res) => {
  return res.json({ message: 'Endpoint root' });
});

export default router