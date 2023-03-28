import { useState, useEffect, setState } from 'react';
import React from 'react';
import axios from 'axios';

let category = "anger"
let URL =  'https://api.api-ninjas.com/v1/quotes?category=' + category

let option = {
  headers: {
    "X-Api-Key": "RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA"
  }
}

export const getQuotes = () => {
  return axios
    .get (URL, option)
};
