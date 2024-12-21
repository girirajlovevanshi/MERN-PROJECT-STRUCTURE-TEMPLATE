import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/connectDB.js'

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running ${PORT}`);    
    })
})
.catch((error)=>{
    console.error(`unable to connect with DB, ERROR: ${error}`);
})