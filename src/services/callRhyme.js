// import React from 'react';
// import { useState, useEffect } from 'react';
// import { getRhyme } from './APIs/rhymeFetch';
// import { selectWord } from './selectWord';




// const CallRhyme = (response) => { 
  
//   const [loading, setLoading] = useState(true);

//   let rhymeWord = response
  
//   useEffect(() => {
//     fetchRhyme()
//     }, [])
  

//   const fetchRhyme = async () => {
//   try{
//     console.log(rhymeWord)
//     const responses = await getRhyme(rhymeWord)
//     console.log(responses)
//     setLoading(false)
//     setResponse(responses.data)
//     }catch(e){
//     console.error(e)
//     }

  
//   }
//   return (
//     <div>
//       <h4>
//        The word rhymes with: {JSON.stringify(rhymeResponse[1])}
//       </h4>
//     </div>
//   );
// }

// export default CallRhyme
