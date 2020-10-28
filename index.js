// Code your solutions in this file
const names = ["bob", "george", "mark"]

function writeCards(a, b) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`);
    };
    return c;
};

function countDown(i) {
    
    while (i > -1) {
        console.log(i);
        i--;
    };

};