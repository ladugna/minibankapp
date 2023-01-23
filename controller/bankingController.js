
const bankDAO = require("../dataStore/bankDta") ;

const applicant = require("../model/bankingArray")



const bankController = (function(){

        const getBankingAccount = function(req ,res){
                return  bankDAO.getData() ;
        } ;


        const addNewBankingAccount = function(req,res){
                
        const accountNumber = req.body.txtAccountNo ;        //body.-> the name in the inpit or form-tetx.html
        const fullName =req.body.txtCustomerName ;
        
        const typeOfAccount = req.body.ddlAccountType;
        
       
       
        const s =new applicant(accountNumber,fullName,typeOfAccount);

        bankDAO.saveData(s) ;
       
        }


        return{

                getBankingAccount:getBankingAccount,
                addNewBankingAccount:addNewBankingAccount
 }

        


})();

module.exports = bankController ; 