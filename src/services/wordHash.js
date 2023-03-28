import React from "react";
import { selectWord } from "./selectWord";

export function QuoteHashWord (quote =""){
    let quoteToBeHashed = JSON.stringify(quote.quote)
    let wordToBeHashed = selectWord(quoteToBeHashed)
    console.log(JSON.stringify(quote.quote))
    let quoteWithHash = ""
    quoteWithHash = quoteToBeHashed.replace(wordToBeHashed, function () {
        let wordWithHash = ""
        for(let i = 0; i < wordToBeHashed.length; i++) {
            wordWithHash+="*";
            console.log(wordWithHash)
        }
        return wordWithHash
    })
    console.log(quoteWithHash)
    return quoteWithHash;
}