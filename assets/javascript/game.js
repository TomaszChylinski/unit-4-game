/*

generated number at the start of the game 19-120
4 crystals (represents 4 numbers) these numbers dont change during the game (i can create an arrary of 1-12 numbers) 
click on crystal add crystal number to your score  


everytime u click on the crystals you get a number (if your score matches the generated number than you win)
win++
lose++
score is at 0 
if you lose or win reset game, but keep score
*/

var guessNumber = Math.floor(Math.random() * 120) + 9;
var winningScore1 = Math.floor(Math.random() * 12) + 1;
var winningScore2 = Math.floor(Math.random() * 12) + 1;
var winningScore3 = Math.floor(Math.random() * 12) + 1;
var winningScore4 = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var yourTotalScore = 0;

console.log("guess number " + guessNumber);
console.log("winning number " + winningScore1);

$(document).ready(() => {
  $("#targetScore").text(" " + guessNumber);
  $("#winsTotal").text(" " + wins);
  $("#lossesTotal").append(" " + losses);
  $("#yourScore").text(" " + yourTotalScore);

  function win() {
    wins++;
    $("#winsTotal").text(" " + wins);
  }

  function lose() {
    losses++;
    $("#lossesTotal").text(" " + losses);
  }

  function reset() {
    yourTotalScore = 0;
    $("#yourScore").text(" " + yourTotalScore);
    guessNumber = Math.floor(Math.random() * 120) + 9;
    $("#targetScore").text(" " + guessNumber);
    winningScore1 = Math.floor(Math.random() * 12) + 1;
    winningScore2 = Math.floor(Math.random() * 12) + 1;
    winningScore3 = Math.floor(Math.random() * 12) + 1;
    winningScore4 = Math.floor(Math.random() * 12) + 1;
  }

  $("#amethyst").click(function() {
    yourTotalScore = yourTotalScore + winningScore1;
    $("#yourScore").text(" " + yourTotalScore);
    if (yourTotalScore === guessNumber) {
      win();
      reset();
    } else if (yourTotalScore > guessNumber) {
      lose();
      reset();
    }
  });

  $("#emld").click(function() {
    yourTotalScore = yourTotalScore + winningScore2;
    $("#yourScore").text(" " + yourTotalScore);
    if (yourTotalScore === guessNumber) {
      win();
      reset();
    } else if (yourTotalScore > guessNumber) {
      lose();
      reset();
    }
  });

  $("#ruby").click(function() {
    yourTotalScore = yourTotalScore + winningScore2;
    $("#yourScore").text(" " + yourTotalScore);
    if (yourTotalScore === guessNumber) {
      win();
      reset();
    } else if (yourTotalScore > guessNumber) {
      lose();
      reset();
    }
  });

  $("#sapphire").click(function() {
    yourTotalScore = yourTotalScore + winningScore2;
    $("#yourScore").text(" " + yourTotalScore);
    if (yourTotalScore === guessNumber) {
      win();
      reset();
    } else if (yourTotalScore > guessNumber) {
      lose();
      reset();
    }
  });
});
