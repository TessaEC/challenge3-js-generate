// Assignment Code

// Create const arrays - will not change:
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["@", "%", "+", "\\", "/", ",", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];


// Enter empty array to be filled with const options:
let passOption = []
let passwordLength = 0;

// Window prompts function:
function prompts() {

// Clear possible options:
  passOption = [];

// PROMPT - length with alerts:
  let lengthPrompt = prompt("How many characters (between 8-128) do you need?");

  if (isNaN(lengthPrompt)) {
    alert("LENGTH MUST BE A NUMBER!");
    return null;
  } 

  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("CHARACTER AMOUNT SHOULD BE BETWEEN 8 AND 128 CHARACTERS!");
    return null;
  }

// Make string a number:
  passwordLength = parseInt(lengthPrompt)

// PROMPTS continued...
  let numPrompt = confirm("Do you want to include numbers?")
  let specialCharactersPrompt = confirm("Do you want to include special characters?")
  let lowerPrompt = confirm("Do you want to include lower case letters")
  let upperPrompt = confirm("Do you want to include upper case letters")

// Push const:
  if (numPrompt) passOption.push(...num);

  if (specialCharactersPrompt) passOption.push(...specialCharacters);
 
  if (lowerPrompt) passOption.push(...lower);

  if (upperPrompt) passOption.push(...upper);

}

// Provided code - Create button for generate ID:
var generateBtn = document.querySelector("#generate"); 

// Display - function for generatePassword:
function generatePassword() {

//updates array of possible characters:
  prompts();

// create string from possible characters:
  let password = "";

//loop:
  for(var i =0 ;i <passwordLength; i++){

//add random character from possOption to password
    var index = Math.floor(Math.random() * passOption.length);
    password += passOption[index];
  }
  return password;
}

// Provided code - Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener for when button is clicked
generateBtn.addEventListener("click", writePassword);

