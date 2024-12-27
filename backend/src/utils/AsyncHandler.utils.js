
// 
// const asyncHandler = () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => {()=>{}}
// const asyncHandler = (func) => ()=>{}
// const asyncHandler = (func) => async ()=>{}
// const asyncHandler = (responceHandler) => async ()=>{}
// const asyncHandler = (responceHandler) => async (req,res, next)=>{}
// const asyncHandler = (responceHandler) => async (req,res, next)=>{}

    // so basically we are using a hihger order funcation ( mean a fucation that accept funcation as arguments)

    // try-cathch block
/*
const asyncHandler = (responceHandler) => async (req,res, next)=>{
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

const asyncHandler = (responceHandler) => async (req,res, next)=>{
    Promise.resolve(
        responceHandler(req,res,next)
    ).catch((err)=> next(err))
}

export {asyncHandler}