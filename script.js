// Assignment code here

var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var symbolArr = ['-', '=', '_', '+', '[', '{', ']', '}', '\',' | ',' < ',', '?', '!', ',', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '~']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // ask for the length of the password
  //  need to convert passwordLength into a number
  var passwordlegnth = parseInt(prompt('How long would you like your password to be?'));

  // need to check if the password if under 8 characters or over 128 character

  if (passwordlegnth < 8 || passwordlegnth > 128) {
    alert('Your password need to be between 8 and 120 charecters');
    return null;
  }

  // need to s
  if (isNaN(passwordlegnth)) {
    alert('Please use the number keys to display your password length')
    return null;
  }

  // need to ask if the user wants uppercase, lowercase, numbers, or symbols in their password
  var lowercase = confirm('Would you like to add lowercase characters?');
  var uppercase = confirm('Would you like to use UPPERCASE charecters?');
  var numbers = confirm('Would you like to add numbers to your password?');
  var symbols = confirm('Would you like to use symbols in your password?');

  //check if atleast one option is true...
  if (!lowercase && !uppercase && !numbers && !symbols) {
    alert('You must select 1 of the 4 options')
    return null;
  }

  // check if each variable is true and then we need to grab all avaialble characters in that array and add them to a mega array of all available characters
  var availableCharacters = [];
  var finalPassword = [];

  if (lowercase) {
    availableCharacters = availableCharacters.concat(lowercaseArr)
  }

  if (uppercase) {
    availableCharacters = availableCharacters.concat(uppercaseArr)
  }

  if (numbers) {
    availableCharacters = availableCharacters.concat(numberArr)
  }

  if (symbols) {
    availableCharacters = availableCharacters.concat(symbolArr)
  }

  for (var index = 0; index < passwordlegnth; index++) {
    var randomCharacter = getrandomInt(availableCharacters)

    finalPassword.push(randomCharacter);
  }

  // return the final password
  return finalPassword.join('');
}

function getrandomInt(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
