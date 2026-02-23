const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3003
const {dbConnection} = require ('./config/db.js')
const router = require ('./routes/productRoutes.js')


app.use(express.json());
app.use('/', router)
dbConnection()


app.listen (PORT,(req,res)=> console.log(`El servidor está activo en http://localhost:${PORT}`))