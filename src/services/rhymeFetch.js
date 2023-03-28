import { useState, useEffect, setState } from 'react';
import React from 'react';
import axios from 'axios';
import { selectWord } from './selectWord';

// word should be passed through props to be equal to the word that is removed from the string when the user asks for a hint


let option = {
  headers: {
    "X-Api-Key": "RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA"
  }
}

export const getRhyme = (selectedWord) => {
    console.log(selectedWord)
    let word = selectWord(selectedWord)
    let URL =  'https://api.api-ninjas.com/v1/rhyme?word=' + word
    return axios
      .get (URL, option)
    };

