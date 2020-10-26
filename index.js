const names = ["Ada", "Brendan", "Ali"];
const event = "birthday"

function writeCards(names, event) {
    let message = []
    for (let i = 0; i < names.length; i++) {
      message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
   return message
}


function countDown(x) {
    let i = x
    while (i >= 0) {
        console.log(i--);
    }
}
