import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import seedRouter from './routes/seedRouter.mjs';
import accountRouter from './routes/accountRouter.mjs';
import userRouter from './routes/userRouter.mjs';
import withdrawRouter from './routes/withdrawRouter.mjs';
import globalError from './middleware/errorHandingMiddleware.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
connectDB();

// routes
app.use('/seed',seedRouter);
app.use('/bank/accounts',accountRouter);
app.use('/bank/users',userRouter);
app.use('/bank/withdraws',withdrawRouter);

// error middle ware
app.use(globalError);

// listen
app.listen(PORT,(req,res)=>{
    console.log(`Listening to port: ${PORT}`);
});
