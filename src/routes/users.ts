import express from "express"

const router = express.Router()


// Routes to users
router.get('/', (req, res) => {
  res.json({ route: 'Users routes' })
})


export default router