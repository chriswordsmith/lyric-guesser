import React from 'react';
import { useState, useEffect, setState } from 'react';
import { getQuotes } from './quotes-fetch';

// exporting function and adding default value so code doesn't return undefined when waiting for api
export function selectWord(quote = ""){


    // removing punctuation from quote so doesn't affect length of word, and splitting into array of individual words
    quote = quote.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
    let splitQuote = quote.split(" ")

    // choosing word to be blanked for game by taking the longest word from the splitQuote array

    let blankWord = splitQuote.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    )
    return blankWord;
}

let correctAnswer = selectWord()

console.log(correctAnswer)

