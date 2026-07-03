
// solved
// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }



// not solve yet 
function digitize(n) {
  //code here
  let arry =[]
  
  let num = n.toString().split("")
   
   for(let i = num.length ; i>=0 ; i-- ){
     
     arry[i] += num[i]
   }
  
  return +arry
}



// solved  above 
function digitize(n) {
  //code here
  let arry =[]
  
  let num = n.toString().split("")
   
   for(let i = num.length ; i>=0 ; i-- ){
     
     arry[i] = +num[i]
   }
  
  return +arry
}

// solved in short method   

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}




 
function findOdd(A) {
  // .reduce() array ke har element par loop chalayega aur XOR apply karega
  return A.reduce((accumulator, current) => accumulator ^ current, 0);
}

// Test Cases
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // Output: 5
console.log(findOdd([1, 1, 2])); // Output: 2


function findOddAlternative(A) {
  const count = {};
  
  // Har number ka count store karna
  for (let num of A) {
    count[num] = (count[num] || 0) + 1;
  }
  
  // Woh number dhundna jiska count odd hai
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num); // Object keys hamesha string hoti hain, isliye number mein convert kiya
    }
  }
}