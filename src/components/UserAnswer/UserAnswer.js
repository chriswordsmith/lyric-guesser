import React, { Component } from "react";
import { selectWord } from "../../services/selectWord";


class UserAnswer extends Component {

    constructor(props){
        super(props);
        this.quote = this.props.quote
        this.correctAnswer = selectWord(this.quote)
        this.state = {
            answerIsTrue: false,
            userAnswer: "",
    
        }
    
        
    }

    
    handleInputChange = event => {
        let value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.userAnswer !== this.correctAnswer){
            this.setState({
                answerIsTrue: false
            }, () => {
            alert(`userAnswer is ${this.state.answerIsTrue}
            userAnswer = ${this.state.userAnswer}
            correctAnswer = ${this.correctAnswer}`)
            });
            
        }
        else if (this.state.userAnswer == this.correctAnswer) {
            this.setState({
                answerIsTrue: true
            }, () => {
            alert(`userAnswer is ${this.state.answerIsTrue}
            userAnswer = ${this.state.userAnswer}
            correctAnswer = ${this.correctAnswer}`)
            });
        }
    }
    render() {
        return(
            <div>
                <input 
                    value={this.state.userAnswer}
                    onChange={this.handleInputChange}
                    name="userAnswer"
                    type="text"
                    placeholder="Enter your guess"
                />
                <button onClick={this.handleFormSubmit}>Submit</button>
            </div>
        )
    }
}


export default UserAnswer