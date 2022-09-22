// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("What is the length of your password? (please select number only between 8-128)")

  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number!")
    return
  } 
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 & 128")
    return
  }

  
  // return "Generated password goes here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
