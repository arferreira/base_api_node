import express  from "express"

const router = express.Router()


// Routes to users
router.get('/', (req, res) => {
  res.json({route: 'users routes'})
})


export default router