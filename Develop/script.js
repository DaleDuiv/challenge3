// Assignment Code
var generateBtn = document.querySelector("#generate");
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  };

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max);
}


function getRandomItem(list) {
  return list[randomInt(list.length)]
};


function generatePassword() {
  var userInput = window.prompt("What is the length of your password? (please select number only between 8-128)");

  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number!");
    return
  };
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 & 128");
    return
  };

  var userNumberRequest = window.confirm("Would you like numbers to be in your password?");
  var userSymbolRequest = window.confirm("Would you like symbols to be in your password?");
  var userLowercaseRequest = window.confirm("Would you like lowercase letter to be in your password?");
  var userUppercaseRequest = window.confirm("Would you like uppercase letters to be in your password?");

  var numberList = ["0","1","2","3","4","5","6","7","8","9",];
  var symbolList = ["!","@","#","$","%","^","&","*","_","+"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = [];

  var optionsList = [];


  for (var i=0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  };

  if (userNumberRequest === true) {
    optionsList.push(numberList);
  };
  
  if (userSymbolRequest === true) {
    optionsList.push(symbolList);
  };

  if (userLowercaseRequest === true) {
    optionsList.push(lowercaseList);
  };

  if (userUppercaseRequest === true) {
    optionsList.push(uppercaseList);
  };

  if (optionsList.length === 0) {
    window.alert("You must enter a criteria! we have defaulted a lowercase password for you.")
    optionsList.push(lowercaseList)
    
  }; 
  

  var generatePassword = ""

  for (var i=0; i <passwordLength; i++) {
    var randomList = getRandomItem(optionsList);
    var randomChar = getRandomItem(randomList);
    generatePassword += randomChar
  };

  return generatePassword 


}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
