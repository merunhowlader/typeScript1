console.log('hello world');
let message:string = 'hello world';
console.log(message);
// string ,number Array
//any

//
function getLowerCase(str:string) {
    return str.toLowerCase();

}

console.log(getLowerCase('hi Merun'));
console.log(getLowerCase(''));

const b:number = 234;
const a:number =3;


function add(number1:number, number2:number):number {
//last number after parameter is for return type
    return number1 + number2;

}

add(a,6);
add(a,b);

//arrow function
const substract=(number1:number, number2:number):number => {
    return number1 - number2;
}

substract(2,1);


//array declaration
const array:number[] =[1, 1, 1];

const array1:string[]=['a','k','d'];

//multiple type
type numberAndString=number|string;

const id:numberAndString= 2345;

//interface

interface IPerson{
    
        name: string;
        age: number;
        hobby?: string;//making hobby optional with ?
    
}

// const person:{
//     name: string;
//     age: number;
//     hobby: string;
// }={
//     name:'merun',
//     age:22,
//     hobby:"programming"
// }

const person1:IPerson={
    name:'merun',
    age:22,
    hobby:"programming"
}

const person2:IPerson={
    age:25,
    name:'merun',
    

}

//Enums



enum Colors {
    color1='#000000',
    color2='#ffffff',
    color3='#00a000ff'

}
console.log('color check',Colors.color3);

//generic 
// function _contact<T>(a:T,b:T):T{
//     return a+b;
// }

// _contact<number>(1,3);
// _contact<string>('mk',"howlader");

const arr2: Array<number| string>=[a,b,123,'merun']