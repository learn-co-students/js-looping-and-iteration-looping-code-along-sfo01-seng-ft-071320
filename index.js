// Code your solutions in this file


function writeCards(cards, event) {
    let newCards = []
    for (let i = 0; i < cards.length; i++) {
        newCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return newCards;
}

function countDown(count) { 
while (count > 0) {
    console.log(count)
        count -= 1;
    };
    console.log(count);
};