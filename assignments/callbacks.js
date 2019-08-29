// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
//TESTING MY HIGHER ORDER FUNCTIONS getLength();
let randomString = ["isdjo", "jioajsdods", "somiejoiije"];

//one callback function to test them all, hahahahaha!!!!
function returnValuePassed(len){
  return len;
}
console.log(getLength(randomString, returnValuePassed));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let indexOfLastItem = arr.length - 1;
  return cb(arr[indexOfLastItem]);
}
//TESTING MY HIGHER ORDER FUNCTIONS last();
console.log(last(randomString, returnValuePassed));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let resultOfSum = x + y;
  return cb(resultOfSum);
}
//TESTING MY HIGHER ORDER FUNCTIONS sumNums();
console.log(sumNums(20, 30, returnValuePassed));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let resultOfMultiplication = x * y;
  return cb(resultOfMultiplication);
}
//TESTING MY HIGHER ORDER FUNCTIONS multiplyNums();
console.log(multiplyNums(20, 30, returnValuePassed));



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.  
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item) === true){
    return cb(true);
  }else{
    return cb(false);
  }

}

//TESTING MY HIGHER ORDER FUNCTIONS contains();
let item2 = "mickey";
let arraylist = ["topsdfe", "shadey", "mickey"];
console.log(contains(item2, arraylist, returnValuePassed));//returns true, i checked!


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

