// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        var computerSelectionRandom = Math.floor(Math.random() * 3);
        switch(computerSelectionRandom){
            case 0:
                this.computerSelection = Selections.ROCK;
                break;
            case 1:
                this.computerSelection = Selections.PAPER;
                break;
            case 2:
                this.computerSelection = Selections.SCISSORS;
                break;          
        }
       return this.computerSelection;
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        if(this.computerSelection === this.playerSelection){
            return Outcomes.TIE;
        }
        if(this.playerSelection === "scissors"){
            if(this.computerSelection === "rock"){
                return Outcomes.COMPUTER_WINS;
            }else {
                return Outcomes.PLAYER_WINS;
            }
        }

        if(this.playerSelection === "rock"){
            if(this.computerSelection ==="paper"){
                return Outcomes.COMPUTER_WINS;
            }else {
              
                return Outcomes.PLAYER_WINS;
            }
        }
        if(this.playerSelection === "paper"){
            if(this.computerSelection === "scissors"){
                return Outcomes.COMPUTER_WINS;
            }else {
                return Outcomes.PLAYER_WINS;
            }
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;