let cards = [];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}
// writeCards(["Ada", "Brendan", "Ali"], "birthday");
function countDown(num) {
    let i = num; 
    while (0 <= i) {
        console.log(i);
        i--;
    }
}