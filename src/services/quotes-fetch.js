const URL =  'https://api.api-ninjas.com/v1/quotes?category=' + category

var option = {
  method: 'GET',
   
    headers: { 'X-Api-Key': 'RO3HcoMlPoxv3aIo/tHeDA==N1ZNWBVJY32TY8ZA'},
    contentType: 'application/json',
}

// Vanilla
export async function fetchData() {
  fetch(URL, option)
    .then((response) => response.json())
    .then((json) => takeData(json));
}
// function takeData(val) {
//   return val.slice(1, 11);
// }

