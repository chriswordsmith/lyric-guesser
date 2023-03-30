import React from "react";
import { selectWord } from "./selectWord";

export function QuoteHashWord (quote =""){
    console.log(quote)
    let quoteToBeHashed = JSON.stringify(quote.quote)
    let wordToBeHashed = selectWord(quoteToBeHashed)
    let quoteWithHash = ""
    quoteWithHash = quoteToBeHashed.replace(wordToBeHashed, function () {
        let wordWithHash = ""
        for(let i = 0; i < wordToBeHashed.length; i++) {
            wordWithHash+="*";
        }
        return wordWithHash
    })
    return quoteWithHash;
}