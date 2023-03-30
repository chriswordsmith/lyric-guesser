import React from "react";
import { selectWord } from "./selectWord";

export function QuoteHashWord (quote =""){
    let authorName = JSON.stringify(quote.quote.author)
    let quoteToBeHashed = JSON.stringify(quote.quote.quote)
    let wordToBeHashed = selectWord(quoteToBeHashed)
    let quoteWithHash = ""
    quoteWithHash = quoteToBeHashed.replace(wordToBeHashed, function () {
        let wordWithHash = ""
        for(let i = 0; i < wordToBeHashed.length; i++) {
            wordWithHash+="*";
        }
        return wordWithHash
    })
    return (
        <div>
            <h2>
                {quoteWithHash}
            </h2>
            <h3>
                {authorName}
            </h3>
        </div>
    );
}