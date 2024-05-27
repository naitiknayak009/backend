// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import express from "express"; // Import express
import connectDB from "./db/index.js";

// Initialize Express app
const app = express();

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection Failed !!", err);
  });

// import express from "express";
// const app = express();

// ( async => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error" , (error) =>{
//             console.log("error" , error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port : ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("ERROR" , error);
//         throw error
//     }
// })()
