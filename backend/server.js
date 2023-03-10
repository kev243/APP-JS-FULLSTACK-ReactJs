const express= require('express');
const connectDB = require('./config/db');
const dotenv=require("dotenv").config();
const cors =require("cors")
const port = 5000;

//connexion bd
connectDB();

const app = express();

//autorisation cors
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
   optionsSuccessStatus:200,
}));


// middleware qui permet de traiter les données de la requetes
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//nos routes 
app.use("/post",require("./routes/post.routes"))

// lancer le server
app.listen(port,()=>console.log("le serveur à démarré au port " + port))