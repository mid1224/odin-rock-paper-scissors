
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

console.log(getComputerChoice());