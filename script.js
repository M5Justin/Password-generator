// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var Upletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var input = "";
  var choices;
  
  
  
  //user input of password length
  input = parseInt(prompt("How many characters would you like your password to be? It can be 8-128 characters."));

  //if/else prompts for using certin characters
  if (!input) {
    alert("You need to choose a number between 8 and 128");
  } else if (input < 8 || input > 128) {
    input = parseInt(prompt("You need to choose a number between 8 and 128"));
  } else {
    isUpletters = confirm("Would you like to use uppercase letters?");
    isLowercase = confirm("Would you like to use Lowercase letters?");
    isSpecial = confirm("Would you like to use Special characters?");
    isNumbers = confirm("Would you like to use Numbers?");
  }

  //else if for possible choices

  if (!isUpletters && !isLowercase && !isSpecial && !isNumbers) {
    choices = alert("You must choose at least 1 option. HINT! The strongest passwords use them all");

  }else if(isUpletters && isLowercase && isSpecial && isNumbers) {
    choices = Upletters.concat(Lowercase, Special, Numbers);

  }else if (isUpletters && isLowercase && isSpecial) {
    choices = Upletters.concat(Lowercase, Special);

  }else if (isUpletters && isLowercase && isNumbers) {
    choices = Upletters.concat(Lowercase, Numbers);
    
  }else if (isUpletters && isSpecial && isNumbers) {
    choices = Upletters.concat(Special, Numbers);

  }else if (isLowercase && isSpecial && isNumbers) {
    choices = Lowercase.concat(Special, Numbers);

  }else if (isUpletters && isLowercase) {
    choices = Upletters.concat(Lowercase);

  }else if (isUpletters && isSpecial){
    choices = Upletters.concat(Special);

  }else if (isUpletters && isNumbers) {
    choices = Upletters.concat(Numbers);

  }else if (isLowercase && isSpecial) {
    choices = Lowercase.concat(Special);

  }else if (isLowercase && isNumbers) {
    choices = Lowercase.concat(Numbers);

  }else if (isSpecial && isNumbers) {
    choices = Special.concat(Numbers);

  }else if (isUpletters) {
    choices = Upletters;

  }else if (isLowercase) {
    choices = Lowercase;

  }else if (isSpecial) {
    choices = Special;

  }else if (isNumbers) {
    choices = Numbers;
  }

console.log(choices)

var randomPass = [];

  //for statement
  for (var i = 0; i < input; i++) {
    randomPass = randomPass + choices[Math.floor(Math.random() * choices.length)];
    console.log(randomPass)
  }
  
    UserInput(randomPass);
    return randomPass;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(randomPass) {
    document.getElementById("password").textContent = randomPass;;
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
