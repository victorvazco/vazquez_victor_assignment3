
//Victor Vazquez
//SDI 1408
//Project 3
//Deliverable 3
// This project is my code made later into a flowchart



//Global variables
var confirmation = "Paying User";
var word = "User information reviewed and it is as follows for user: ";


//Procedure

var procedure = function(access){
    
    if (access == "Paying User") {
        console.log("Access No Ads");    
    
    } else {
    console.log("Access with Ads and limited levels");    
        
    }
};



//String Function

var jsonFunctionString = function(json,string){
    for (var i = 0; i < json.NewUsers2.length; i++){
        var user = json.NewUsers2[i];
        var stringReturn = (string + user.userNumber + ", User Id: " + user.userID + ". Age:" + user.age  );
        
    };
    
    return stringReturn;
};


//Boolean Function




//Math Function




//Array Function




//Function Callers

var gameAccess = procedure(confirmation);

var callStringJson = jsonFunctionString(json2,word);

//Returned Values

console.log(callStringJson);



