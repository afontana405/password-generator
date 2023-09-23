// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","_","{","|","}","~"]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var choices = []
  var lowercaseConfirm = confirm("Would you like your password to contain lowercase letters?")
  var uppercaseConfirm = confirm("Would you like your password to contain uppercase letters?")
  var numbersConfirm = confirm("Would you like your password to contain numbers?")
  var specialConfirm = confirm("Would you like your password to contain special characters?")
  var passwordLength = prompt("How long would you like you password to be? (8-128 characters)")
  // user imput decides if lowercase letters will be used in password
  if(lowercaseConfirm) {
    // if confirmed by user, adds lowercase letters to var choices
    choices = choices.concat(lowercase);
  } else {
    
  }
  
  // user imput decides if uppercase letters will be used in password
  if(uppercaseConfirm) {
    // if confirmed by user, adds uppercase letters to var choices
    choices = choices.concat(uppercase);
  } else {

  }

  // user imput decides if numbers will be used in password
  if(numbersConfirm) {
    // if confirmed by user, adds numbers to var choices
    choices = choices.concat(numbers);
  } else {

  }

  // user imput decides if special characters will be used in password
  if(specialConfirm) {
    // if confirmed by user, adds special characters to var choices
    choices = choices.concat(special);
  } else {

  }

  // checks to make sure password length is between 8-128 characters
  if(passwordLength < 8 || passwordLength > 128) {
    // if password is too long/short tells user password must be between 8-128 characters and restarts the function
    alert("password must be between 8-128 characters");
    generatePassword();
    } else {

    }
  
  // randomly picks characters to be used in user's password based off their preferences and desired length
  for(i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * choices.length);
  var genPassword = "".concat(choices[randomNum]);
  console.log(genPassword);
  }
}

