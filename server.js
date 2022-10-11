const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routers/main.js')
const signUpRoutes = require('./routers/signUp')
const loginRoutes = require('./routers/login')
const logoutRoutes = require('./routers/logout')
const homeRoutes = require('./routers/home')
// const groceriesRoutes = require('./routers/groceries')
// const recipesRoutes = require('./routers/recipes')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'bigHair',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/signup', signUpRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)
app.use('/home', homeRoutes)
// app.use('/groceries', groceriesRoutes)
// app.use('/recipes', recipesRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    