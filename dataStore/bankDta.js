
"use strict";

const dataStore = (function(){

        const registrationData = [
                {AccountNumber: "000-11-0001", fullName: "James H. Karvill", TypeOfAccount: "saving"},
                {AccountNumber: "000-11-0002", fullName: "Anna Hernandez-Diaz", TypeOfAccount: "checking"}
            ];
        
            const getData = function() {
                return registrationData;
            }

            const saveData=function(newData){

                registrationData.push(newData);


            }

            return{

                getData:getData ,
                saveData:saveData


            }
})();

module.exports = dataStore ; 