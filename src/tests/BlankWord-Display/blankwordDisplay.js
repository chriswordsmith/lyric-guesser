import { selectWord } from "../../services/selectWord"

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