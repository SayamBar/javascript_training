function pokemonApi(url) {
    const p = fetch(url);
    p.then((response)=> {
        if(response.status === 200){
            console.log('Call success');
            console.log(response);
        } else {
            throw new Error(response.status);
        }
    }).catch((error)=> {
        console.log(error);
    });
}

async function Async(url) {
    const res = await pokemonApi(url);
    console.log(res);
}

Async("https://pokeapi.co/api/v2/pokemon/ditto")
// pokemonApi("https://pokeapi.co/api/v2/pokemon/ditto");

// Just a normal function, not an async function.
// function firstFunction(){
//     return new Promise((resolve, reject)=> {
//     var randomNumber = (Math.floor(Math.random() * 100) % 2);
//       if(randomNumber === 0){
//           setTimeout(() => {
//             resolve("Number is even");
//           }, 3000);
//       }else {
//           setTimeout(() => {
//                reject("Number is odd");
//           }, 4000);
//       }
//     });
//   }
  
//   // Async function starts with async keyword.
//   async function myFirstAsyncFunction(){
//     const result = await firstFunction();
//     console.log(result);
//   }
  
//   myFirstAsyncFunction();