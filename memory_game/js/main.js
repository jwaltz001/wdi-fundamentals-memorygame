console.log("Up and running");
//console.log("User Flipped " + cardTwo);
//console.log("User Flipped " + cardThree);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
console.log("user flipped queen");
var cardTwo = cards[3]
cardsInPlay.push(cardTwo)
console.log("user flipped king")

if (cardsInPlay.length === 2) {
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

