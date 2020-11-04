// Code your solutions in this file
let greetings = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return greetings;
}

function countDown(integer) {
    let countdown = integer
    while (countdown > 0) {
        console.log(countdown)
        countdown--
    }
    console.log(countdown)
}