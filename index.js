// Code your solutions in this file
function writeCards(name) {
    let message = [];
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return message;
}

function countDown(n) {
    while (n > -1 )
    console.log(n--);
}