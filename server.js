
const express = require("express") ;

const path =   require("path") ;

const app = express() ;

const publicRouter = require("./routes/home/public") ; 

const bankRouter = require("./routes/bankRoute/banking") ;


app.use(express.json());


app.set("views",path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({extended: false }));

app.use("/static", express.static(path.join(__dirname, "static-assets"))); 


app.use("/", publicRouter) ;

app.use("/", bankRouter) ;


app.use((req, res) => {
        console.log(`Responding with the 404 Error page`);
        res.status(404);
        res.sendFile(path.join(__dirname, "views", "404.html"));
    });




app.listen(2020 ,()=>console.log("starting app")) ;