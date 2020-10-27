// Code your solutions in this file
const friends = ["Lisa", "Kaitlin", "Jan"]
 
function writeCards(friends, surprise) {
    let thankYouCards = []
    for ( let i = 0; i < friends.length; i++ ) {
      thankYouCards.push( `Thank you, ${friends[i]}, for the wonderful ${surprise} gift!` )
    }
    return thankYouCards
  }


function countDown( countDown ) {
    while ( countDown > 0 ) {
      console.log( countDown );
      countDown -= 1;
    }
    console.log( countDown );
  }