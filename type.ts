// standard types
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
// ARRAYS
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
// tuple array
let strNumTuple: [number, string, string];

// standard type
myString = 'Hello'.slice(0, 3);
myNum = 1;
myBool = false;
myVar = true;

// ARRAYS
strArr = ['Hello', 'World'];
numArr = [0, 1, 1, 2, 3, 5, 8, 13, 21]
boolArr = [true, false, false, true, true, false]
// Tuple
strNumTuple = [1, 'John', 'Doe'];

// output
console.log('START of TYPES');
console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(strNumTuple);
console.log('END of TYPES');
