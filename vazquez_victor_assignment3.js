
//Victor Vazquez
//SDI 1408
//Project 3
//Deliverable 3
// This project is my code made later into a flowchart



//Global variables
var confirmation = "Paying User";
var word = "User information reviewed and it is as follows for user: ";
var boolEan = true;
var levelsArray = ["levelOne", "levelTwo", "levelThree"];
var hackerAlert = false;
var cost = 2;
var taxAmount = 1;

levelsArray[1] = 'special level two';


//Procedure

var procedure = function(access){
    
    if (access == "Paying User") {
            
    if (hackerAlert === false) {
        console.log("Access No Ads");
    }
    } else {
    console.log("Access with Ads and limited levels");    
        
    }
};



//String Function

var jsonFunctionString = function(json,string){
    for (var i = 0; i < json.NewUsers2.length; i++){ //array property
        var user = json.NewUsers2[i];
        var stringReturn = (string + user.userNumber + ", User Id: " + user.userID + ". Age:" + user.age  );
        
    };
    
    return stringReturn;
};




//Boolean Function

var decideFun = function(truth){
    
    while (cost < 2 && cost>= 0){
        
    if (truth === true ){
        cost +1;
    
        var response = "Upgraded version ";
    
    
        } else {
        
        var response1 = "Lesser game graphics ";
        
      
        }
         return response1;
    }
    return response;
};


//Math Function

var addAtax = function(tax){
    
    math = tax + 1;
    
    return math;
    
};



//Array Function

var arrayLevel = function (level){
    
    for (var i = 0; i < levelsArray.length; i++) {   //Array property
    
    var i = levelsArray;
    
    levelsArray.push('Level Four!');//Array method
    var newLevel = levelsArray[3];
    };
    
    return newLevel;
};




//Function Callers

var gameAccess = procedure(confirmation);

var callStringJson = jsonFunctionString(json2,word);

var makeDecide = decideFun(boolEan);

var checkLevels = arrayLevel(levelsArray);

var paySam = addAtax(taxAmount);

//Returned Values

console.log(callStringJson);

console.log(makeDecide + "is what you will play");

console.log("Congratulations, you unlocked " + checkLevels + "!")

console.log("Uncle Sam get's paid too for a total cost of " + paySam + " dollars in all.");