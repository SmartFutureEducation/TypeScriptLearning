/* TypeScript Intro, Part 1. 
    Topics include:
        Variables
        Typeof
        Comments
        Print Logs
        
   Reference Links: 
        https://www.w3schools.com/js/js_variables.asp
        https://www.w3schools.com/js/js_output.asp
        https://www.w3schools.com/js/js_statements.asp
        https://www.w3schools.com/js/js_comments.asp
        https://www.w3schools.com/js/js_const.asp
        https://www.w3schools.com/js/js_let.asp
*/

// Print Welcome Message 
console.log("Print Welcome Messages")
console.log("Hello World!")
console.log("Welcome to Codeing for Green project!")
console.log("Game on!!")
console.log("")

// Pring Player Names
console.log("Printing Player Names")
console.log("Welcome player Hugo!")
console.log("Welcome player Grace!")
console.log("Welcome player Antony!")

// Use Variable for Player Name
console.log("Use Variable for Player Names")
let player = "Hugo"
console.log("Welcome player " + player)
player = "Grace"
console.log("Welcome player " + player)
player = "Antony"
console.log("Welcome player " + player)

// Use Array for Player Names
console.log("Use Array for Player Names")
let players = ["Hugo","Grace", "Antony"]
console.log("Go through all players...")
for (player of players){
    console.log("Welcome player " + player)
}
// A little bit more of Array
// for (player in players){
//     console.log("Players array Index " + player)
//     console.log("Welcome player " + players[player])
// }

//  Const
const map_width = 1024
const map_length = 768
console.log("Const map_width is " + map_width)

// types & undefined
let player1Score = 100          // auto recognized as number type
console.log(player1Score)
console.log(typeof(player1Score))
// The following will report error as types not aligned
// player1Score = "Jack"

let player2Score                // type of 'any'
console.log(player2Score)
player2Score = 99
console.log(player2Score)
console.log(typeof(player2Score))
player2Score = "Welcome to the score board!"
console.log(player2Score)
console.log(typeof(player2Score))


// declare types
let welcomeMessage1 = "Welcome!!!"
console.log(welcomeMessage1)
// welcomeMessage1 = 99 

let welcomeMessage2:string = "Welcome to the waste min game!"
console.log(welcomeMessage2)
// welcomeMessage2 = "abc"
// welcomeMessage2 = 100


// Multiple line string
let longComments = `If you want to write multiple lines, 
here's how to do it. 
Give it a try. `
console.log(longComments)

// Better format for long strings 
console.log(`Let's compose a long string with different variables.
The welcomeMessage1 value is ` + welcomeMessage1 + `The welcomeMessage2 value is ` + welcomeMessage2 +`The player1Score is ` + player1Score + `.`)

console.log(`Let's compose a long string with different variables.
The welcomeMessage1 value is ${welcomeMessage1}
The welcomeMessage2 value is ${welcomeMessage2}
The player1Score is ${player1Score}.`)

// boolean
let player1Died: boolean = false
console.log(`Player 1 died is ${player1Died}`)

// 
let A: number|string = 0
console.log(`Value of A is ${A}; Type of A is ${typeof A}`)
console.log(typeof A)
A = "abc"
console.log(`Value of A is ${A}; Type of A is ${typeof A}`)
