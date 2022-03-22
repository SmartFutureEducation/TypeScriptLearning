/* 
  TypeScript Intro Part 2
    Topics include:
      - Conditions

  Reference Links:
      https://www.w3schools.com/js/js_if_else.asp

*/

// If a game player being killed
let playerLife: number = 0
if (playerLife <= 0) {
  console.log("Player died!!!")
} 

playerLife = 3
if (playerLife <= 0) {
    console.log("Player died!!!")
} else {
    playerLife = playerLife - 1 
    console.log(`Player remains ${playerLife} lives`)
}

// Greetings across the day, depends on the time 
let time: number = 20
let greeting: string
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)
