import  express from "express";
import  colors  from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from 'cors';
import  authRoute  from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from  './routes/productRoutes.js'
// import path  from "path";
const app = express();

//configure env
dotenv.config();

//database config
connectDB();


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use('/api/v1/product',productRoutes);


app.get('/', (req, res) => {
  res.send("server is running ")

})




//port
const PORT = process.env.PORT ;


//run listen

app.listen(PORT, () =>{
    console.log(`server is runing on ${PORT}`.bgCyan.white)
})

