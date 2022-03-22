/* 
  TypeScript Intro Part 3
    Topics include:
      - While
      - For

  Reference Links:
      https://www.w3schools.com/js/js_loop_while.asp
      https://www.w3schools.com/js/js_loop_for.asp
      https://www.w3schools.com/js/js_loop_forin.asp
      https://www.w3schools.com/js/js_loop_forof.asp
*/

let numPlayers: number = 1
while (numPlayers <= 5) {
  console.log(numPlayers + " players joined the game.");
  numPlayers++;
}


for (let numEnemies = 0; numEnemies < 10; numEnemies++) {
  console.log(`There're ${numEnemies} enemies joined the game...`)
  if (numEnemies >= 9){
      console.log('Max of 10 enemies been reached.')
  }
}
