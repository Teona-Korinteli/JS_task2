let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  Ties: 0,
  pcWins: 0,
};
updateScoreElement();


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "scissors") {
      result = "Its a tie";
    } else if (computerMove === "paper") {
      result = "You win";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "Its a tie";
    }
  }

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Its a tie";
    } else if (computerMove === "scissors") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "You Lose";
    }
  }

  if (result === "You win") {
    score.wins += 1;
    score.pcWins =score.pcWins
  } else if (result === "You Lose") {
    score.wins =score.wins;
    score.pcWins +=1;
  } else if (result === "Its a tie") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector('.js-moves' )
  .innerHTML = `<img src="images/${playerMove}-emoji.png">`;
  document.querySelector('.js-moves-pc' )
  .innerHTML = `<img src="images/${computerMove}-emoji.png">`;
}

function updateScoreElement() {
  document.querySelector(".js-score" ).innerHTML = ` You: ${score.wins} `
  document.querySelector(".js-score-pc").innerHTML = ` You:  ${score.pcWins}`
  
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
