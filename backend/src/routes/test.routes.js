import { Router } from "express";

const rotuer = Router()

rotuer.route('/test').get((req,res)=>{
    res.send(`Server is Running`)
})

export default rotuer