

const express = require("express");

const path = require("path");

const bankingController = require("../../controller/bankingController") ;

const bankRouter = express.Router();

bankRouter.get("/registration",(req, res) => {
        
const banking = bankingController.getBankingAccount() ;      //from controller
      res.render("account-student",{banking: banking}); //student-list.pug from view
    });


   
    bankRouter.post("/registration",(req, res) => {
        const result = bankingController.addNewBankingAccount(req ,res);
       
        res.redirect(303, "/registration");
    });

    bankRouter.get("/registration/list", (req, res) => {
      const allAccount = bankingController.getBankingAccount();
      //console.log(allAccount)
      res.json(allAccount);
  });
    
    module.exports =bankRouter;