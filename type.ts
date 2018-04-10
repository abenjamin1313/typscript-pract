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

// Void, Undefined, and NULL
let myVoid: void = null;
let myUndefined: undefined = undefined;
let myNull: null = null;

// output
console.log('START of TYPES');
console.log('String: '+myString);
console.log('Number: '+myNum);
console.log('Boolean: '+myBool);
console.log('Any: '+myVar);
console.log('String Array: '+strArr);
console.log('Number Array: '+numArr);
console.log('Tuple: '+strNumTuple);
console.log('Void: '+myVoid);
console.log('Undefined: '+myUndefined);
console.log('Null: '+myNull);
console.log('END of TYPES');
