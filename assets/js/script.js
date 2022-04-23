// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");


  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABECDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?|';
  var passwordLength = 12;
  var password = ""; 
  
  for (var i=0; i<passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("password").value = generateBtn
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
