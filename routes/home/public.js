
const express = require("express") ;
const path = require("path");
const publicRouter = express.Router();

// Define home page routes
publicRouter.get("/", (req, res) => {
        console.log(`Presenting homepage 1`);
        res.sendFile(path.join(__dirname, "../../views", "index.html"));
    });
    
    
    
    publicRouter.get("/home", (req, res) => {
        
        console.log(`Presenting homepage 2`);
        
        res.sendFile(path.join(__dirname, "../../views", "index.html"));
    });


    



    module.exports = publicRouter ; 