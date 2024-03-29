var cards = [
	{
	rank: "queen", 
	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var x = 0;
function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		/*console.log*/alert("You found a match!");
		addWin();
		} else {
		/*console.log*/alert("Sorry, try again.");
		addLoss();
		}
}

function addWin () {
	document.getElementById('score-wins').innerHTML = x += 1;
}
function addLoss () {
	document.getElementById('score-losses').innerHTML = x += 1;
}
	
function flipCard () {
	cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} 
};

function createBoard () {
	for(i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard () {
	for(i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay.length = 0;
}
document.getElementById('reset').addEventListener('click', resetBoard);
createBoard();