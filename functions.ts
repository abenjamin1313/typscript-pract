// using types in functions
function getSum(num1:number, num2:number):number {
  return num1 + num2;
}

console.log(getSum(1,8));
console.log('<br>');
console.log(getSum(1,5))

let mySum = function(num1:any, num2:any):number {
  if(typeof num1 == 'string') {
    num1 = parseInt(num1);
  }
  if(typeof num2 == 'string') {
    num2 = parseInt(num2);
  }
  return num1 + num2;
}

console.log(mySum('2',6));
console.log('<br>');
console.log('---');

function getName(firstName: string, lastname?: string): string {
  if(lastname == undefined) {
      return firstName;
  }
  return firstName+''+lastname;
}

console.log(getName('Stacy','Victor'));
console.log(getName('Adam',''));
