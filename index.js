const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwEl1 = document.getElementById("pw-el-1") // grabbing element for password 1
let pwEl2 = document.getElementById("pw-el-2")// grabbing element for password 2

function getCharacter() { // obtain a random character from characters's array
    let i = Math.floor(Math.random() * characters.length) // use to create a random number that will be set to the variable i (index)
    let character = characters[i] // created variable called character and use the random number as the index to pull a random character from the characters array
    return character //returns one character
}

function generatePassword() {  // establish the length of the password | could make it more dynamic by using input from user
    let result = "" // empty string variable
    for (let i = 0; i < 15; i++){ // runs loop 15 times
        result += getCharacter() // runs function 15 times and add it to empty string value called result
    }
    return result // returns the 15 characters after the loop is finish
}

function randomPassword() { // inputs characters 
    pwEl1.textContent = generatePassword() //adds the result of generatePassword() to the paragraph in HTML for password 1
    pwEl2.textContent = generatePassword() //adds the result of generatePassword() to the paragraph in HTML for password 2
}