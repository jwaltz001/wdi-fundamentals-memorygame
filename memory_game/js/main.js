console.log("Up and running");
//console.log("User Flipped " + cardTwo);
//console.log("User Flipped " + cardThree);
//Old code to compare to functions
	/*var cardOne =[0];
	cardsInPlay.push(cardOne);
	console.log("user flipped " + cardOne);
	
	var cardTwo = cards[2]
	cardsInPlay.push(cardTwo);
	console.log("user flipped " + cardTwo); 
//my first try 
	if (cardsInPlay.length === 2) {
		} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
		}
	*/


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		} else {
		console.log("Sorry, try again.");
		}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch()
	}
};
flipCard(0);
flipCard(2);