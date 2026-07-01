
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