const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const users = [
  {
    id: 1,
    name: "Mahadi Hassan",
    email: "mahadi@example.com",
    age: 24
  },
  {
    id: 2,
    name: "Ayesha Rahman",
    email: "ayesha@example.com",
    age: 22
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    email: "tanvir@example.com",
    age: 25
  }
];


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/usersPost', (req, res) => {
  const newUser = req.body
  newUser.id = users.length + 1 
  users.push(newUser)
  res.send(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})