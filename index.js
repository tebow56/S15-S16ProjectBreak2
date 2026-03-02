const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3003
const {dbConnection} = require ('./config/db.js')
const router = require ('./routes/productRoutes.js')
const apiRouter = require ('./routes/apiRoutes.js')
const authRouter = require ('./routes/authRoutes.js')
const methodOverride = require('method-override');
const session = require('express-session');
app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true
}));  

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(express.json());


app.use('/', router)
app.use('/API', apiRouter)
app.use ('/auth', authRouter)
dbConnection()


app.listen (PORT,(req,res)=> console.log(`El servidor está activo en http://localhost:${PORT}`))