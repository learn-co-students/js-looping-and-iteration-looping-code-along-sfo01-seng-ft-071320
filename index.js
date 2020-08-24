// Code your solutions in this file

function writeCards(arr, event) {

    let result = [];

    for (let i = 0; i < arr.length; i++ ) {
    
        let str = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        result.push(str)
    } 
    return result;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown() {
    let countDown = 10;
    while (countDown >= 0 ) {
        console.log(countDown--)
    }
}
