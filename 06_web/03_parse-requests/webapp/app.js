const express = require('express')
const app = express()
const port = 3000

const validateJsonMiddleware = (req, res, next) => {
  if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
      return res.status(400).json({ error: 'Invalid Content-Type. Must be application/json' })
  }

  next()
}

app.use(validateJsonMiddleware)
app.use(express.json())

app.get('/', (req, res) => {
  res.json({text: "hello world"})
})

app.post('/', (req, res) => {
  res.status(201).json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
