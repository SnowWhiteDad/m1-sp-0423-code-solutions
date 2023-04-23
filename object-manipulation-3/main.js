/* exported play */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

// declare input variables for players and cards per hand
// call the main function
//     declare a an array variable to hold the players, and assign an array of four player names to it
//     declare a variable to hold the number of cards per hand, and assign a 2 to it
//     call the main function to run the game with input variables of the players array and cardsPerHand
//        return a two-element array with the first element being the name of the winning player and the second is undefined or an array of the names of the players with the highest score
//        or return a two-element array with the first element being the string 'There was a Tie' and the second is an array of the names of the players with the highest score
//        assign the return value of the main function to a variable called result
//     while there is a tie i.e. result[0] is strictly equal to 'There was a Tie'
//        run the main function as tie-breaker again with the same input parameters but with a new array of the players that are tied i.e. result[1]
//        assign the return value of the main function to a variable called result
//        continue until there is only one player left, i.e. result[0] is not strictly equal to 'There was a Tie'
//     log the name of the winning player to the console
console.log('');

/*
let players = ['Iron Man', 'Super Man', 'Batman', 'Ip Man'];
let cardsPerHand = 2;
*/

function run(players, cardsPerHand) {
  let playerNames = players;
  let playerNamestoString = playerNames.toString();
  console.log(players.length + ' players: ', playerNamestoString);
  console.log('Cards per hand: ', cardsPerHand);
  let result = main(players, cardsPerHand);
  
  if (result[0] === 'There was a Tie') {
    playerNames = result[1];
    playerNamestoString = playerNames.join(', ');
    console.log('There was a Tie: ', playerNamestoString);
  }
  
  while (result[1]) {
    result = main(result[1], cardsPerHand);
  }
  console.log('');
  console.log(result[0] + ' wins!');
}


// ----------  Algorithim  overview  ----------
// write a main function that takes in an array of players and the number of cards per hand
//    creates a collection of objects that represent players in a game.
//      each player should have a unique name and a hand to hold cards.
//    creates a collection of 52 objects that represent a standard deck of 52 cards.
//      each card should have a rank and a suit.
//    shuffles the deck of cards.
//    deals two cards to each player in a round robin fashion.
//      no two players should have the same card in their hand.
//    finds the player with the highest score
//      if there is a tie,
//        return a two-element array with the first element being the string 'There was a Tie' and the second is an array of the names of the players with the highest score
//       if there is no tie,
//        return an array with the first element being the name of the winning player

// --------- Define main() function ----------
// define the main function that takes in an array of players and the number of cards per hand
//    define a variable deck to hold a new deck object of cards
//      assign a new object using a constructor function Deck() to the variable deck
//    call the buildDeck function on the deck object to create a deck of cards in the deck object
//    call the shuffle function on the deck object to shuffle the deck of cards
//    define a variable gamePlayers to hold an empty array
//      loop through the input players array using a for loop
//        start at index i = 0 to the length of the input players array
//        create a new player object using a constructor function Player()
//        push the new player object to the gamePlayers array for each player at index i
//      end of loop
//    log the gamePlayers array to the console
//    deal number of cards per cardsPerHand input to each player in a round robin fashion
//      loop through the gamePlayers array using a for loop
//        start at index i = 0 to the length of the gamePlayers array
//          loop through the cardsPerHand parameter using a for loop
//            start at index j = 0 to cardsPerHand - 1
//              call the drawCard function on the deck object to draw a card from the deck
//              push the drawn card to the hand property of the player at index i
//          end loop
//        end loop
//
//    define a variable highestScore to hold an initial value of 0
//       assign 0 to highestScore
//    define a variable highestScoringPlayers to hold an empty array
//    loop through the gamePlayers array using a for loop
//      start at index i = 0 to the last index of the gamePlayers array i.e. gamePlayers.length - 1
//      define a variable score to hold an initial value of 0
//        loop through the hand property of the player at index i (i.e gamesPlayer[i]) using a for loop
//          start at index j = 0 to the last index of the hand property of the gamesPlayer[i] (i.e gamesPlayer[i].hand.length - 1)
//            call the rankvalue function to get the value of the card at index j (i.e gamesPlayer[i].hand[j])
//            add the value of the card to the score variable
//          end loop
//       check if score is greater than the highestScore
//         if true, assign highestScore to score
//         assign a one-element array of gamesPlayer[i] to the highestScoringPlayers array

//        esle if score is equal to the highestScore
//          push the gamesPlayer[i] object to the highestScoringPlayers array
//     end loop

//     check if the length of the highestScoringPlayers array is strictly equal to 1
//       if true,
//         return the name of the player at index 0 of the highestScoringPlayers array
//       if false,
//         return a two-element array with the first element being the string 'There was a Tie' and the second is an array of the names of the players with the highest score
//    end if
// end function

function main(players, cardsPerHand) {
  let deck = new Deck();
  deck.buildDeck();
  // console.log(deck.cards);
  deck.shuffle();
  let gamePlayers = [];
  for (let i = 0; i < players.length; i++) {
    gamePlayers.push(new Player(players[i]));
  }
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < cardsPerHand; j++) {
      gamePlayers[i].hand.push(deck.drawCard());
    }
  }

  let highestScore = 0;
  let highestScoringPlayers = [];
  for (let i = 0; i < gamePlayers.length; i++) {
    let score = 0;
    for (let j = 0; j < gamePlayers[i].hand.length; j++) {
      score += rankvalue(gamePlayers[i].hand[j].rank);
    }
    if (score > highestScore) {
      highestScore = score;
      highestScoringPlayers = [gamePlayers[i]];
    } else if (score === highestScore) {
      highestScoringPlayers.push(gamePlayers[i]);
    }
  }
  if (highestScoringPlayers.length === 1) {
    return [highestScoringPlayers[0].name];
  } else {
    // create a new array to hold the names of the players with the highest score
    let highestScoringPlayerNames = [];
    for (let i = 0; i < highestScoringPlayers.length; i++) {
      highestScoringPlayerNames.push(highestScoringPlayers[i].name);
    }

    return ['There was a Tie', highestScoringPlayerNames];

  }
}

// ---------- Define constructor Deck() function ----------
// define a function that creates a deck object
//    define a variable deck to hold an empty array of cards as property of the deck object
//    define a variable suits to hold an array of strings representing the suits of cards
//      assign the array of strings to the suits property of the deck object
//    define a variable ranks to hold an array of strings representing the ranks of cards
//      assign the array of strings to the ranks property of the deck object
//    define a function buildDeck(), as a property of deck object, that takes in no parameters and builds a deck of cards
//      loop through the suits property of the deck object using a for loop
//        start at index i = 0 to the last index of the suits property of the deck object
//          loop through the ranks property of the deck object using a for loop
//            start at index j = 0 to the last index of the ranks property of the deck object
//              create a new card object using a constructor function Card()
//              push the new card object to the cards array property of the deck object
//            end loop
//      end loop
//    end buildDeck function
//    define a function shuffle(), as a property of deck object, that takes in no parameters and shuffles the deck of cards
//      loop through the cards array property of the deck object using a for loop
//        start at index i = 0 to the last index of the cards array property of the deck object
//          define a variable randomIndex to hold a random number between 0 and the last index of the cards array property of the deck object
//            assign a random number between 0 and the last index of the cards array property of the deck object to randomIndex
//          swap the card at index i with the card at index randomIndex, using the a temporary variable temp as the temporary store during the swap
//        end loop
//    end shuffle() function
//    define a function drawCard(), as a property of deck object, that takes in no parameters and draws a card from the deck
//      pop a card from the cards array property of the deck object
//      return the card that was popped
//    end drawCard() function
// end Deck() function

function Deck() {
  this.cards = [];
  this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  this.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  this.buildDeck = function () {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.cards.push(new Card(this.suits[i], this.ranks[j]));
      }
    }
  }; // end of buildDeck
  this.shuffle = function () {
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.cards.length);
      let temp = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  };
  this.drawCard = function () {
    return this.cards.pop();
  };
}

// ---------- Define constructor Player() function ----------
// define a function that takes in a string name and creates a player object
//    define a property name to hold the name string
//    define a property hand to hold an empty array of cards as property of the player object
// end Player() function

function Player(name) {
  this.name = name;
  // create a hand property that is an empty array
  this.hand = [];
}

// ---------- Define constructor Card() function ----------
// define a function that takes in a rank and a suit and creates a card object
//    define a property suit to hold the suit string as a property of the card object
//    define a property rank to hold the rank string as a property of the card object
// end Card() function

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

// ---------- Define rankvalue() function ----------
// define a function that takes in a string rank and returns the value of the rank
//    if the rank is 'Ace', return 11
//    if the rank is '2', return 2
//    if the rank is '3', return 3
//    if the rank is '4', return 4
//    if the rank is '5', return 5
//    if the rank is '6', return 6
//    if the rank is '7', return 7
//    if the rank is '8', return 8
//    if the rank is '9', return 9
//    if the rank is '10', return 10
//    if the rank is 'Jack', return 10
//    if the rank is 'Queen', return 10
//    if the rank is 'King', return 10
//      use the or operator, check if the rank is 'Jack' or 'Queen' or 'King' and return 10
//      use the parseInt() function to convert the string rank to an integer and return that integer
// end rankvalue() function

function rankvalue(rank) {
  if (rank === 'Ace') {
    return 11;
  } else if (rank === 'Jack' || rank === 'Queen' || rank === 'King') {
    return 10;
  } else {
    return parseInt(rank);
  }
}
