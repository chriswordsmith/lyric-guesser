import React from 'react';

var quote = "the quick brown fox jumped over the lazy doge"
function SelectWord (quote){
    
    quote  = quote.split(" ")
    // Return the first sorted item of the Array
    quote = quote.sort((a, b) => b.length - a.length)[0]
    return quote;
}

let CorrectAnswer = SelectWord(quote) 

console.log(CorrectAnswer)

export default SelectWord();