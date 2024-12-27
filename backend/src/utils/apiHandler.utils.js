
// 
// const apiHandler = () => {}
// const apiHandler = (func) => {}
// const apiHandler = (func) => {()=>{}}
// const apiHandler = (func) => ()=>{}
// const apiHandler = (func) => async ()=>{}
// const apiHandler = (responceHandler) => async ()=>{}
// const apiHandler = (responceHandler) => async (req,res, next)=>{}
// const apiHandler = (responceHandler) => async (req,res, next)=>{}

    // so basically we are using a hihger order funcation ( mean a fucation that accept funcation as arguments)

    // try-cathch block
/*
const apiHandler = (responceHandler) => async (req,res, next)=>{
    try {
        await responceHandler(req,res,next)
    } catch (error) {
        res.status(error.code || 500 ).json({
            success : false,
            message : error.message
        })
    }
}
*/
    // Promise

const apiHandler = (responceHandler) => async (req,res, next)=>{
    Promise.resolve(
        responceHandler(req,res,next)
    ).catch((err)=>{
        next(err)
    })
}