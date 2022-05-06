function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * choices.length);
    console.log(choices[choice]);
    return choices[choice];
}

function playerPlay() {
    return prompt("Rock, paper, or Scissors?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let tiemsg =   `it\'s a tie! Both got ${playerSelection}`;
    let winnermsg = `You Win! ${playerSelection} beats ${computerSelection}.`
    let losermsg = `You Lose! ${computerSelection} beats ${playerSelection}`

    if(computerSelection === playerSelection)
        return tiemsg;
    else if(computerSelection == 'rock' && playerSelection =='scissors')
        return "lose";
    else if(computerSelection == 'paper' && playerSelection == 'rock')
        return "lose";
    else if(computerSelection  == 'scissors' && playerSelection == 'paper')
        return "lose";
    else
        return "win";
}

function game() {
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++)
    {
        console.log(`Player: ${playerScore}     Computer: ${compScore}`);
        
        let msg = playRound(playerPlay(), computerPlay());
        

        //let winnermsg = `You Win! ${playerSelection} beats ${computerSelection}.`
        //let losermsg = `You Lose! ${computerSelection} beats ${playerSelection}`

        if(msg == "win")
        
            playerScore++;
        else if(msg =="lose")
            compScore++;
    }

    if(compScore > playerScore)
    {
        console.log("Computer Wins!");
    }
    else if(compScore === playerScore)
        console.log("It's a tie!");
    else
        console.log("Player Wins!");
}

game();


