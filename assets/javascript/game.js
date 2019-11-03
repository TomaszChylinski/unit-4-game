/*

generated number at the start of the game 19-120
4 crystals (represents 4 numbers) these numbers dont change during the game (i can create an arrary of 1-12 numbers) 
click on crystal add crystal number to your score  



everytime u click on the crystals you get a number (if your score matches the generated number than you win)
win++
lose++
score is at 0 
*/

var guessNumber =  Math.floor(Math.random() * 120) + 9; 
var winningScore1 = Math.floor(Math.random() * 12) + 1; 
var winningScore2 = Math.floor(Math.random() * 12) + 1; 
var winningScore3 = Math.floor(Math.random() * 12) + 1; 
var winningScore4 = Math.floor(Math.random() * 12) + 1; 
var wins = 0;
var losses = 0;

console.log('guess number ' + guessNumber);
console.log('winning number ' +  winningScore1);

function runGame(){



  
$("#targetScore").append(" " +guessNumber);
$("#winsTotal").append(" " + wins);
$("#lossesTotal").append(" " + losses);




}
runGame()
  