// Code your solutions in this file
function writeCards(array, day){
    let newArray = []
    for(let i=0; i<array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${day} gift!`)
    }
    return newArray
}

function countDown(n){
    while(n >= 0){
        console.log(n)
        n--
    }
}