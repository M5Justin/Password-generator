// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //your code goes here
  var input;
  var upletters;
  var lowercase;
  var special;
  var numbers;
  var choices;

  special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  lowercase = "abcdefghijklmnopqrstuvwxyz";
  upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers = "0987654321";
  
  
  //user input of password length
  input = parseInt(prompt("How many characters would you like your password to be? It can be 8-128 characters."));

  //if/else prompts for using certin characters
  if (!input) {
    alert("You need to choose a number between 8 and 128");
  } else if (input < 8 || input > 128) {
    input = parseInt(prompt("You need to choose a number between 8 and 128"))
  } else {
    upLetters = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    special = confirm("Would you like to use special characters?");
    numbers = confirm("Would you like to use numbers?");
  }

  //else if for possible choices

  if (!upletters && !lowercase && !special && !numbers) {
    choices = alert("You must choose at least 1 option. HINT! The strongest passwords use them all");
  }else if(upletters && lowercase && special && numbers) {
    choices = character.concat(upLetters, lowercase, special, numbers);
  }

  
  

  for (var i = 0; i <= passLength; i++) {
    var input = passLength
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
    console.log(password)
  }
    document.querySelector("#generate").value = password;
  
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


