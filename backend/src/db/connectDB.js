import mongooes from 'mongoose'
import { DB_NAME } from '../const.js'

const connectDB = async () => {    
    try {
        const connectionInstance = await mongooes.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`conn succuss: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error(`DB conn error: ${error}`);
        process.exit(1)

    }    
}
export default connectDB;