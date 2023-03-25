import { useState, useEffect, setState } from 'react';
import React from 'react';
import axios from 'axios';

// word should be passed through props to be equal to the word that is removed from the string when the user asks for a hint

let word = "anger"
let URL =  'https://api.api-ninjas.com/v1/thesaurus?word=' + word

let option = {
  headers: {
    "X-Api-Key": "RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA"
  }
}

export const getSynonym = () => {
    return axios
      .get (URL, option)
    };
