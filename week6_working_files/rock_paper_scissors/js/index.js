//store the human player score and the computer (bot)
//score in variables
var humanScore = 0;
var computerScore = 0;

//write a 'play' function that handles the different conditions of gameplay
//depending on being passed an argument string for "rock", "paper",
//or "scissors" - the human user choice
function play(humanPlay) {
  //call the return functio to get a random 'bot' choice
  var computerPlay = getComputerPlay();

  //update the #status to display who played what
  //use jQuery .html()
  $("#status").html("You selected" +humanPlay+". The bot selected "+computerPlay);

  //write a conditional block for a human "rock" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append() to update the #status
  if (humanPlay === "rock") {
    if (computerPlay === "rock"){
      // game tie
      $("#status").append("Tie! Try again!");
    }else if (computerPlay === "paper"){
      //we lose
      $("#status").append("You Lose :(");
      computerScore++;
    }else if (computerPlay === "scissors"){
      // we win
      $("#status").append("You Win!");
      humanScore++;
    }
  } else if (humanPlay === "paper"){
    if (computerPlay === "paper"){
      //tie
      $("#status").append("Tie! Try again!");

    }else if (computerPlay ==== "scissors"){
      //we lose
      $("#status").append("You Lose :(");
      computerScore++;
    }else if (computerPlay === "rock"){
      //we win
      $("#status").append("You Win!");
      humanScore++;
    }
  } else if (humanPlay === "scissors"){
    if (computerPlay === "scissors"){
      //tie
      $("#status").append("Tie! Try again!");
    }else if (computerPlay === "paper"){
      //we win
      $("#status").append("You Win!");
      humanScore++;
    }else if (computerPlay === "rock"){
      // we lose
      $("#status").append("You Lose :(");
      computerScore++;
    }
  }


  //write a conditional block for a human "paper" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()

  //write a conditional block for a human "scissors" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()

  //update the #humanScore and #computerScore elements
  //use jQuery .html()

}


//write a function that randomly picks a 'bot' choice from
//an array of options and returns it
function getComputerPlay() {
  var plays = ["rock", "paper", "scissors"];

  var randomNumber = Math.random(); //value between 0-1
  var l = plays.length;

  var randomPlayNumber = Math.floor(randomNumber * l);

  var play = plays[ randomPlayNumber ];

  return play;
}

// var plays = ["rock", "paper", "scissors"];
// var play = Math.floor(Math.random() * plays.length);
// var plays, play[i]; complicated method

//define three click handler functions for the
//#rock, #paper and #scissors buttons. They should all call a
//generic 'play' function, passing in "rock", "paper", or "scissors"
//as a string argument.
function playRock() {
  play("rock");
}

function playPaper() {
  play("paper");
}

function playScissors() {
  play("scissors");
}

//bind the #rock, #paper and #scissors buttons to their
//relevant click handler functions
$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);
