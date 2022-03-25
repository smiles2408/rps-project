var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
     game.newGame();
    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
   var numberOfRounds = 0;
   var validNumberOfRounds = true;

   do{

    numberOfRounds = prompt("Enter the number of rounds you want to play....Values between 1 to 5");
    validNumberOfRounds = game.isNumberOfRoundsValid(numberOfRounds);
   }
   while(validNumberOfRounds == false);

    // Use game.IsNumerOfRoundsValid() to validate the user input.
  
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the user again
   if(validNumberOfRounds){
       game.setNumberOfRounds(numberOfRounds);

   } 

    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
     for(var i = 1;i <= numberOfRounds; i++){
        console.log(`round: ${i}`);
         playRound(i);  
         
     }
    
    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object

      

}
/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {


    // Display the Current Score to the User
    
    console.log(`score: computer score is: ${game.countOfComputerWins} player score is: ${game.countOfPlayerWins} and numner of ties is :${game.countOfTies}`);
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    if(playerSelection != undefined){

    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();
    if(outcome === "computer"){
        game.incrementComputerWins();
     } else if(outcome === "player"){
        game.incrementPlayerWins();

     } else if(outcome === "tie"){
        game.incrementCountOfTies();
    }
    
    // Display the Round Results from the properties stored in the Round object
    
        console.log(`player selected : ${playerSelection} and computer selected ${round.computerSelection}`);  
        console.log(`Result : ${outcome} wins...`); 
    }
     else {
         alert("Please enter the choices again : rock, paper or scissors");
     }

}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    var playerSelection = prompt("Enter your Choice: rock, paper or scissors");
    if( playerSelection === "rock" ){
        return playerSelection;
    } else if(playerSelection === "paper" ){
        return playerSelection;
       
    } else if(playerSelection === "scissors" ){
        return playerSelection;
    } 
}

