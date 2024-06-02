//Initialize playgame() function;
function playGame(){
    //Initialize computer and human score to 0;
    let computerScore = 0;
    let humanScore = 0;

    function makeComputerChoice(){
        //An array of rock, paper, scissors where computer makes choices
        let rps = ['rock', 'paper', 'scissors'];
        let getRandomComputerChoice = rps[Math.floor(Math.random()* (3))];//generate an index number from 0 to 2 to pick from the rps array
        return getRandomComputerChoice;
    };

    function getHumanChoice(){
        //Prompt user to input rock, paper, scissors;
        let humanChoice = (prompt('Enter Rock, Paper or Scissors')).toLowerCase();
        //If user input rock, paper, scissors corrrectly, return humanChoice
        if ((humanChoice.toUpperCase() === "ROCK") || 
            (humanChoice.toUpperCase() === "PAPER") || 
            (humanChoice.toUpperCase() === "SCISSORS")
            ){
            return humanChoice;
        }
        // else throw an alert and re-ask for input via recursion;
        else{
            humanChoice = 'WRONG CHOICE OR INCORRECT INPUT, TRY AGAIN';
        };
    }

    function playRound(computerChoice,humanChoice){
        let outcome;
        //If computerChoice and humanChoice are equal, return Tie and re-play round till we have a winner
        if (computerChoice ==='rock' && humanChoice === 'rock'){
            outcome = 'Tie';
        }else if(computerChoice === 'paper' && humanChoice === 'paper'){
            outcome = 'Tie';
        }else if (computerChoice === 'scissors' && humanChoice === 'scissors'){
            outcome = 'Tie';
        }
        //If humanchoice rock>scissors, paper>rock, rock>scissors, human wins
        else if (humanChoice ==='rock' && computerChoice === 'scissors'){
            outcome = 'Win';
        }else if(humanChoice === 'paper' && computerChoice === 'rock'){
            outcome = 'Win';
        }else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            outcome = 'Win';
        }
        //If computerchoice rock>scissors, paper>rock, rock>scissors, human lose
        else if(computerChoice ==='rock' && humanChoice === 'scissors'){
            outcome = 'Lose';
        }else if(computerChoice === 'paper' && humanChoice === 'rock'){
            outcome = 'Lose';
        }else if (computerChoice === 'scissors' && humanChoice === 'paper'){
            outcome = 'Lose';
        }else{
            outcome = 'Human choice'
        }
        
        return outcome;
    }
 
    //Initialize round to 1, so the games starts at round 1;
    let roundCounter = 1;
    //Set the number of rounds to be played;
    const numberOfRounds = 5;

    //While round counter is less than or equal 5, playGame;
    while (roundCounter <= numberOfRounds){
        console.log(`Round ${roundCounter} begin!`);
        
        //Play next round while replayRound is force, replay if replayRound is true;
        let replayRound = false;
        let computerChoice = makeComputerChoice();
        let humanChoice = getHumanChoice();

        
        roundOutcome = playRound(computerChoice,humanChoice);
        switch (roundOutcome.toLowerCase()){
            case ('tie'):
                console.log(`It's a tie, no winner replay round`)
                //If round outcome is a tie, set replayRound to true
                replayRound = true;
            break;

            case ("win"):
                console.log('You won this round!!');
                humanScore++;
            break;

            case ("lose"):
                console.log('You lose this round!!');
                computerScore++;
            break;

            case ("human choice"):
                console.log("You've inputted a wrong choice, try again");
                replayRound = true; 
            break;
        }    

        console.log(`human:${humanScore} : computer:${computerScore}`);
        
        //Increment round counter if replay round is false, else don't increment;
        if (!replayRound){
            roundCounter++;
        }
    //End while loop
    }
    //Display result of the game 
    console.log((humanScore>computerScore)?
    "Congratulations, you won this game".toUpperCase():
    "Oppps, you lose this game, try again".toUpperCase());
}