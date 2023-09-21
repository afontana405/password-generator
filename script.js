// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const password = ""
  if(prompt("How long would you like you password to be? (8-128 characters)") < 8 || prompt("How long would you like you password to be? (8-128 characters)") > 128)
  alert("password must be between 8-128 characters long");

  if(confirm("Would you like your password to contain lowercase letters?") == true) {
 
  } 

  if(confirm("Would you like your password to contain uppercase letters?") == true) {
  password.push(letters);
  }


  if(confirm("Would you like your password to contain numbers?") == true) {
  password.push(numbers);
  }


  // if(confirm("Would you like your password to contain special characters?") == true) {

  // }
  console.log(password);
}
