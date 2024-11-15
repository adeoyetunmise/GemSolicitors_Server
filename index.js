import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import caseRoutes from './routes/caseRoutes.js'




dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())



app.use('/api', caseRoutes)

const PORT = process.env.PORT
app.listen(PORT, (req, res) =>{
    console.log('listening at ' + PORT);
    
})
app.get("/tena", (req, res) => {
    res.send("<h1> Tena </h1>");
})
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('connected to database');
    
})
.catch((err) =>{
    console.log(err)
})
