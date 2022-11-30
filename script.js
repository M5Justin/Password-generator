// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //your code goes here
  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";
  const input = prompt("How many characters would you like your password to be?");
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use lowercase?");
  var isSpecial = confirm("Would you like to use a special character?");
  var isNumber = confirm("Would you like to use a number?");
  
  
  if (input) {
    console.log(input)
  }

  if (isUppercase) {
    console.log("uppercase");
  }

  if (isLowercase) {
    console.log("lowercase");
  }
  
  if (isSpecial) {
    console.log("special");
  }

  if (isNumber) {
    console.log("number");
  }

  // grab random letters

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
