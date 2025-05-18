let humanscore = 0;
let computerscore = 0;
const maxscore = 3;

const taunt = [
    "You're predictable.",
    "Is that all you've got?",
    "Maybe try guessing better.",
    "Computer supremacy confirmed.",
    "Thanks for the free win!"
];

const output = document.getElementById("output");

function getrandomInt() {
    return Math.floor(Math.random()*3)+1;
}
function numtoword(number) {
    const words = {
        1: "rock",
        2: "paper",
        3: "scissors"
    } 
   return words[number];    
}

function getResult(computerchoice, humanchoice){
    if (computerchoice === humanchoice) return "tie";
    if ((humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) return "win";
    else 
    return "lose";
}

function playRound(humanchoice) {
    const computernumber = getrandomInt();
    const computerchoice = numtoword(computernumber);
    const result = getResult(humanchoice, computerchoice);


    if (result === "tie"){
        output.textContent = `Tie, Both chose ${humanchoice}. Try Again!`;
        return;
    }
    if (result === "win"){
        humanscore++;
        output.textContent = `You chose ${humanchoice}, and the computer chose ${computerchoice}. You win this round!`;
        
    }
    if (result === "lose"){
        computerscore++;
        const randomTaunt = taunt[Math.floor(Math.random() * taunt.length)];
        output.innerHTML = `You chose ${humanchoice}, and the computer chose ${computerchoice}. You lose this round!<br><em>${randomTaunt}</em>`;
    }

    updateScore();

    if (humanscore === maxscore || computerscore === maxscore){
        endGame();
    }
}

function updateScore(){
    document.getElementById("score").textContent = `You: ${humanscore} | Computer: ${computerscore}`
}

function endGame(){
    const winner = humanscore === maxscore ? "YOU WIN!" : "YOU LOSE!";
    output.innerHTML += `<br><strong>GAME OVER - ${winner}</strong>`;
    document.getElementById("choice-buttons").innerHTML = "";

    if (humanscore === maxscore) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

const startButton = document.querySelector("#startgame");
const startButtonContainer = document.querySelector("#start-button-container");
startButton.addEventListener("click", () => {
    startButtonContainer.innerHTML = "";
    document.getElementById("choice-buttons").innerHTML =` 
        <button class="choice" data-choice="rock">Rock</button>
        <button class="choice" data-choice="paper">Paper</button>
        <button class="choice" data-choice="scissors">Scissors</button>
        `;

humanscore = 0;
computerscore = 0;
updateScore();
document.getElementById("output").textContent = "Choose your Weapon!";
}); 

document.getElementById("choice-buttons").addEventListener("click", (e) => {
    if (e.target.classList.contains("choice")) {
        playRound(e.target.dataset.choice);
    }
});