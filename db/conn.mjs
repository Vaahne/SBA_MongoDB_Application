import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb';

dotenv.config();
const connectionStr = process.env.mongoURI;

async function connectDB(){

    try{
        await mongoose.connect(connectionStr);
        console.log("Connection successful");
    }catch(err){
        console.error(err.message);
    }
    
}


export default connectDB;





//  using mongoDB
// const client = new MongoClient(connectionStr);

// let conn;
// try{
//     conn = await client.connect();
//     console.log("Connected to MongoDB.....");
// }catch(err){
//     console.error(err.message);
// }
// let db= await conn.db("sample_training");

// export default db;