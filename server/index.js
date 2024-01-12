import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import route from './Route/Products.js'
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');

const port=3000
app.use('/pro',route)

app.listen(port,()=>{
console.log(`welcome ${port}`);
})