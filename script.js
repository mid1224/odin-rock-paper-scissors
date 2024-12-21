
function getComputerChoice ()
{
    let i = Math.random();

    if (i < (1/3))
    {
        return "rock";
    }
    else if (i > 2/3)
    {
        return "paper";
    }
    else
    {
        return "scissor";
    }
}

//console.log(getComputerChoice());

function getHumanChoice ()
{
    let choice = prompt("Rock, paper, or scissor?: ");
    let choiceLowered = choice.toLowerCase();
    let finalChoice = choiceLowered.trim();

    if (finalChoice === "rock" || finalChoice === "paper" || finalChoice === "scissor")
    {
        return finalChoice;
    }

    return "Invalid";
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound()
{
    let compChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice === "Invalid")
    {
        console.log("Invalid Input! The round was forfeited!");
        return;
    }
    else if (humanChoice === compChoice)
    {
        console.log("Tied! Both are " + humanChoice);
        return;
    }
    else if ((humanChoice === "rock" && compChoice === "paper") || (humanChoice === "paper" && compChoice === "scissor") || (humanChoice === "scissor" && compChoice === "rock"))
    {
        console.log("You lose! " + compChoice + " beats " + humanChoice);
        console.log("Current score: You - " + humanScore + " Computer - " + (++computerScore))
        return;
    }
    else if ((humanChoice === "rock" && compChoice === "scissor") || (humanChoice === "paper" && compChoice === "rock") || (humanChoice === "scissor" && compChoice === "paper"))
    {
        console.log("You win! " + humanChoice + " beats " + compChoice);
        console.log("Current score: You - " + (++humanScore) + " Computer - " + computerScore)
        return;
    }
}