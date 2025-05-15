//wrapping game in a play game function. so all logic is defined
//JS hits the end and runs the function top to bottom. 
//play game at the bottom has already been called, so it's only by actively 
//running the playgame() function at the play again prompt that it runs the 
//function again.
function playgame() {
console.log('Lets play Rock Paper Sissors! \n\nHow about best of 5?');

//we've setup a function called 'getrandomint'
//we've returned a number either 1, 2, or 3
//Math.floor rounds our math.random number to nearest integer.
//alone, this would always be 0, so we times our number between 0-1, by 3
//now we have a number either 0, 1, or 2, so we add 1 at the end.
function getrandomInt() {
    return Math.floor(Math.random()*3)+1;
}
//Created a function, with the parameter being a number
//We've mapped integers, to words; words is an object. 
//upon the return, we are saying return the number but mapped to the 
//assosiated word
function numtoword(number) {
    const words = {
        1: "rock",
        2: "paper",
        3: "scissors"
    }
    return words[number];
}
//Creation of 5x iteration. i = 1, everything is within curly brackets there after. 
let humanscore = 0;
let computerscore = 0;
for (let i = 1; i <= 5; i++){
    
    console.log(`\nRound ${i}`);

    //prompting user to enter a word, this will be human choice.
    //mapping this word to be a number
    //unsure whether to use numbers or strings in working out the winner
    let humanchoice = prompt("choose rock, paper, or scissors.").toLowerCase();
        const choicemap = {
                rock: 1,
                paper: 2,
                scissors: 3
        }
    // computernumber = the random number
    // computer word = random integer mapped through number to word function
    const computernumber = getrandomInt()
    const computerword = numtoword(computernumber);
    //additional not-true condition to restart the round upon invalid input
        if (!choicemap[humanchoice]) {
            console.log("silly goose, that's an invalid input, replay the round");
            i--
            continue;
        }

    //printing the choices made by user and computer
        console.log(`You chose ${humanchoice}, & the computer chose ${computerword}`);
      
    //conditions for each outcome, continuing and minus 1 from i for tie.   
    let result;
        if (choicemap[humanchoice] === computernumber){
            result = 'TIE';
            console.log('Ahhhh, you both said the same thing, replay the round!')
            i--;
            continue;
        } else if (
            (choicemap[humanchoice] === 1 && computernumber === 3) ||
            (choicemap[humanchoice] === 2 && computernumber === 1) ||
            (choicemap[humanchoice] === 3 && computernumber === 2)
        ) {
            result = 'YOU WIN!';
            humanscore++
        } else {
            result = 'YOU LOSE'
            computerscore++
        }
    //display of current scores and result
    console.log(result);
    console.log(`your score = ${humanscore}`);
    console.log(`computer score = ${computerscore}`)

    //Early Win conditions
    if (humanscore === 3) {
        console.log("\nYOU WON THE GAME!");
        break;
        }
    if (computerscore ===3) {
        console.log("\n YOU LOST, BETTER LUCK NEXT TIME!");
        break;
        }
    }
//play again option
let playagain = prompt("Do you want to play again? (yes or no)").toLowerCase();
    if (playagain === "yes") {
    playgame()
    }
    else {
    console.log("No Worries, Thanks for Playing");
    }
}
playgame();