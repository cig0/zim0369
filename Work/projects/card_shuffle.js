const prompt = require('prompt-sync')(); 

let masterSuit = ['A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠',
         'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
         'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
         'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦'];

let copySuit = masterSuit;

for(let i = 0; i<copySuit.length; i++){
    let j = Math.floor(Math.random()*(i+1));
    [copySuit[i], copySuit[j]] = [copySuit[j], copySuit[i]]; 
}

for(let i = 0; i<copySuit.length; i++){
    console.log('\n\n\n\n\n\n'); 
    console.log('                        ___________________');
    console.log('                       |                   |'); 
    console.log('                       |   ' + copySuit[i]);
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |                   |'); 
    console.log('                       |             ' + copySuit[i]); 
    console.log('                       |___________________|');
    console.log('\n\n\n\n\n\n'); 
    let temp = prompt('Next(Enter) | Prev(p) : ');
    console.clear(); 
    if(temp == 'p') i -= 2;
    else if(temp == 'q') break;
} 

let begin = prompt('Press Enter to Start Evaluation.');
let answerSuit = masterSuit;

for(let i = 0; i<copySuit.length; i++){
       let symbol = prompt('Choose the suit 1(Spades) 2(Clubs) 3(Hearts) 4(Diamonds)');
       let number = prompt('Enter the card number 11(Jack) 12(King)');
       if(number == 69 || symbol == 69) break;
       answerSuit[i] = number+symbol; 
}

console.log(copySuit);
console.log(answerSuit);
