// Code your solutions in this file

function writeCards(name, event) {
    let message = []
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return message
}

function countDown(int) {
   while (int >= 0) {
       console.log(int--);
   } 
}