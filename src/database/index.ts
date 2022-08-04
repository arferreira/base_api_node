import mongoose, {ConnectOptions} from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const mongoUrlConnect =  process.env.MONGO_URI + process.env.MONGO_DATABASE_NAME

export default function connectToMongoDb(): void {
  if(mongoUrlConnect){
    mongoose.connect(mongoUrlConnect, () => console.log('Connected to mongoDB'))
  }else{
    console.info('Failed to connect to mongoDB')
  }
    
}