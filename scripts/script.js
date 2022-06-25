//reference to player weapons
const weapons = document.querySelectorAll('.weapon');

//refrence to player weapon text
const playerWeaponText = document.getElementById('player-weapon');

//reference to computer weapon text
const computerWeaponText = document.getElementById('computer-weapon');

//reference to result text
const resultText = document.getElementById('result');

//reference to score text
const playerScoreText = document.getElementById('player-score');
const ComputerScoreText = document.getElementById('computer-score');

let playerScore = 0,
	computerScore = 0;

//for each weapon fire off a click event
weapons.forEach((weapon) => {
	weapon.addEventListener('click', (e) => {
		//read in the data-choice attribute to select player weapon and set to player choice
		let playerWeapon = weapon.dataset.choice;
		//display player choice
		playerWeaponText.textContent = setPlayerWeaponText(playerWeapon);

		//set computer weapon
		let computerWeapon = setComputerWeapon();
		//set computer choice
		computerWeaponText.textContent = setComputerWeaponText(computerWeapon);

		//check winner
		resultText.innerHTML = setResultText(
			checkWinner(playerWeapon, computerWeapon, playerScore, computerScore)
		);

		playerScoreText.textContent = playerScore;
		ComputerScoreText.textContent = computerScore;
	});
});

function setComputerWeapon() {
	//weapons array
	const choices = ['rock', 'paper', 'scissor'];

	//get a random number from 1 to 3
	let index = Math.floor(Math.random() * 3);

	return choices[index];
}

function setPlayerWeaponText(playerWeapon) {
	switch (playerWeapon) {
		case 'rock':
			return '✊';
			break;
		case 'paper':
			return '✋';
			break;
		case 'scissor':
			return '✌️';
			break;
	}
}

function setComputerWeaponText(computerWeapon) {
	switch (computerWeapon) {
		case 'rock':
			return '✊';
			break;
		case 'paper':
			return '✋';
			break;
		case 'scissor':
			return '✌️';
			break;
	}
}

function checkWinner(playerWeapon, computerWeapon) {
	//draw conditon
	if (playerWeapon == computerWeapon) return 'Draw';
	else if (
		(playerWeapon == 'rock' && computerWeapon == 'scissor') ||
		(playerWeapon == 'paper' && computerWeapon == 'rock') ||
		(playerWeapon == 'scissor' && computerWeapon == 'paper')
	) {
		playerScore++;
		return 'Player';
	} else {
		computerScore++;
		return 'Computer';
	}
}

function setResultText(result) {
	switch (result) {
		case 'Player':
			return '<p id="win-text">YOU WIN!</p>';
		case 'Computer':
			return '<p id="lose-text">YOU LOSE!</p>';
		case 'Draw':
			return '<p id="draw-text">DRAW!</p>';
	}
}
