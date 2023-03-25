import { selectWord } from "../../services/logic"
import { getQuotes } from "../../services/quotes-fetch"
import { fetchQuotes } from "../Quote-Display/displayquote"

const BlankWordDisplay = (response) => {
    let quote = response.quote
    let word = selectWord(quote);
    return (
        <div>
            <h2>Blank word is: {word}</h2>
        </div>
    )
}

export default BlankWordDisplay