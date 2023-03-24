import { useState, useEffect, setState } from 'react';
import React from 'react';
import axios from 'axios';

let word = "anger"
let URL =  'https://api.api-ninjas.com/v1/rhyme?word=' + word


const Rhymes = () => {
  useEffect(() => {
    getRhymes();
  }, []);
  
  const [rhymes, setRhymes] = React.useState();

  const getRhymes = () => {
    return axios
      .get (URL)
      .then((res) => console.log (res.data))
      .catch((err) => console.error (err));
    };
    return <h1>Rhymes</h1>;
};

export default Rhymes;
