const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
const port = 3000

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set("view engine", "hbs")

app.use(express.static("public")) // css js
app.use(express.urlencoded({ extended: true })) // res.body res.params

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
  const inputEmail = req.body.inputEmail
  const inputPassword = req.body.inputPassword
  const user = users.find(user => user.email === inputEmail && user.password === user.password)

  if (user) {
    res.render("success", { firstName: user.firstName })
  } else {
    res.render("index", { alert: !user })
  }
})

app.listen(port, () => {
  console.log(`The localhost:${port} is running`)
})