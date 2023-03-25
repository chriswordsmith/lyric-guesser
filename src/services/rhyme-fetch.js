import { useState, useEffect, setState } from 'react';
import React from 'react';
import axios from 'axios';

let word = "anger"
let URL =  'https://api.api-ninjas.com/v1/rhyme?word=' + word

let option = {
  headers: {
    "X-Api-Key": "RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA"
  }
}

export const getRhyme = () => {
    return axios
      .get (URL, option)
    };

