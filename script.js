let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let i = Math.random();
    if (i < 1/3) return "rock";
    else if (i < 2/3) return "paper";
    return "scissor";
}

function playRound(humanChoice) {
    let compChoice = getComputerChoice();
    let resultText = "";

    if (humanScore >= 5 || computerScore >= 5) //Stop the game
    {
        return;
    }

    if (humanChoice === compChoice) {
        resultText = `Tied! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && compChoice === "scissor") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissor" && compChoice === "paper")
    ) {
        humanScore++;
        resultText = `You win! ${humanChoice} beats ${compChoice}.`;
    } else {
        computerScore++;
        resultText = `You lose! ${compChoice} beats ${humanChoice}.`;
    }

    if (humanScore === 5)
    {
        document.querySelector(".round-result").textContent = `The game ended! You win!`;
    }
    else if (computerScore === 5)
    {
        document.querySelector(".round-result").textContent = `The game ended! You lose!`;
    }
    else
    {
        document.querySelector(".round-result").textContent = `Computer Score: ${resultText}`;
    }

    document.querySelector(".human-score").textContent = `Human Score: ${humanScore}`;
    document.querySelector(".computer-score").textContent = `Computer Score: ${computerScore}`;
}

document.querySelector(".rock")?.addEventListener("click", () => playRound("rock"));
document.querySelector(".paper")?.addEventListener("click", () => playRound("paper"));
document.querySelector(".scissor")?.addEventListener("click", () => playRound("scissor"));