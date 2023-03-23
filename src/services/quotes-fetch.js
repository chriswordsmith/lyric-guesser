import { useState, useEffect, setState } from 'react';
import React from 'react';
import axios from 'axios';

let category = "anger"
let URL =  'https://api.api-ninjas.com/v1/quotes?category=' + category


  
export const getQuotes = () => {
  return axios.get(URL,{
      headers: { 'X-Api-Key': 'RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA'},
    },
  )
};










// export default {
//   getData: () =>
//   axios({
//       'method':'GET',
//       'url': URL,
      // 'headers': {
      //   'headers': { 'X-Api-Key': 'RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA'},
      //   'contentType': 'application/json',
      // },
//   })
// }






// var option = {
//   method: 'GET', 
  // headers: { 'X-Api-Key': 'RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA'},
  // contentType: 'application/json',
// }

// console.log(URL)
// console.log(option)
// // Vanilla
// export async function fetchData() {
//   fetch(URL, option)
//     .then((response) => response.json())
//     .then((response) => {
//       this.setState({
//         quotes: response
//       })
//     })
//     .catch(error => console.error(error));
// }
// function takeData(val) {
//   return val.slice(1, 11);
// }

