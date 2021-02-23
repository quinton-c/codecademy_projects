//set input equal to the phrase you wish to translate into whale
let input = 'turpentine and turtles'; 
const vowels = ['A', 'E', 'I', 'O', 'U'];
let resultArray = []

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i].toUpperCase() === vowels[v]) {
      if (input[i].toUpperCase() === 'U' || input[i] === 'E') {
        resultArray.push(vowels[v], vowels[v]);
      } else resultArray.push(vowels[v]);
    }
    // console.log(i, v); prints current i and v for each iteration of inside loop
  } 
 // console.log(i); prints i for each iteration of outside loop. these logs provide a good visual for how the loops iterate through the code (or how the code iterates throug the loops?)
}

console.log(resultArray.join(''));

/*
I wrote this code without looking at the codecademy instructions. 
Upon looking back at the instructions, I believe my method was 
better, as it automated more steps of the process and accounted 
for any sort of capitalization in the input string.
*/