// Array Methods- forEach , map, filter, reduce
// 1. forEach() method
// The forEach() method calls a function once for each array element.
// let number=[1,2,3,4,5]
// number.forEach((num)=>{
//     console.log(num)
// })

//map
// The map() method creates a new array by applying a provided function to each element of the original array.The result of each function call becomes an element in the new array.

// 

// let doubled=numbers.map((number)=>number*2);
// console.log(doubled);

// let number=[1,2,3,4,5]
// number.forEach((num)=>num*2)
// console.log(num)

//filter
// the filter method creates a new array containing only the elements of the original array that pass a specific test(ie the function returns true for those elements)

// let number=[1,2,3,4,5]
// let evens=number.filter((num)=>num % 2===0)
// console.log(evens)

// let numbers=[1,2,3,4,5];
// let doubled=numbers.map((number)=>number*3);
// console.log(doubled);
// let evens=doubled.filter((num)=>num % 2===0)
// console.log(evens);

// reduce
//the reduce () executes a provided function on each element of the array , resulting in a single ouptut value. It is often used for aggregating data, such as summing values or calculating a product .

let numbers=[1,2,3,4,5,6,7,8,9,10];
//calculate the sum of all the elements in the array

let sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);