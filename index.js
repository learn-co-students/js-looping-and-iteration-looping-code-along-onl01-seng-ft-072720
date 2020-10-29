// Code your solutions in this file
writeCards(["Ada", "Brendan", "Ali"], "birthday");
function writeCards(arr, eventName){
    let newArr = new Array();
    for(let i = 0; i<arr.length; i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArr
}

let num = 0;
function countDown(num) {
    while(num!=0) {
        console.log(num);
        num = num-1;
    }
    console.log(num);
}