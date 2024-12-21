import express from 'express'
import cors from 'cors'
import cookiesParser from 'cookie-parser'

const app = express()

//middlewares
app.use(cors({
    origin: process.env.CROS_ORIGIN,
    Credential: true
}))

app.use(express.json({
    limit : "16kb"
}))

app.use(express.urlencoded({
    limit: "16kb",
    extended: true 
}))

app.use(express.static("public"))

app.use(cookiesParser())

// import routes
import testRotuer from './routes/test.routes.js'
// routes
app.use('/test',testRotuer)

export default app