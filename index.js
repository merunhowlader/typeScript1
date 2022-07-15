console.log('hello world');
var message = 'hello world';
console.log(message);
// string ,number Array
//any
//
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase('hi Merun'));
console.log(getLowerCase(''));
var b = 234;
var a = 3;
function add(number1, number2) {
    //last number after parameter is for return type
    return number1 + number2;
}
add(a, 6);
add(a, b);
//arrow function
var substract = function (number1, number2) {
    return number1 - number2;
};
substract(2, 1);
//array declaration
var array = [1, 1, 1];
var array1 = ['a', 'k', 'd'];
var id = 2345;
// const person:{
//     name: string;
//     age: number;
//     hobby: string;
// }={
//     name:'merun',
//     age:22,
//     hobby:"programming"
// }
var person1 = {
    name: 'merun',
    age: 22,
    hobby: "programming"
};
var person2 = {
    age: 25,
    name: 'merun'
};
//Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#000000";
    Colors["color2"] = "#ffffff";
    Colors["color3"] = "#00a000ff";
})(Colors || (Colors = {}));
console.log('color check', Colors.color3);
//generic 
// function _contact<T>(a:T,b:T):T{
//     return a+b;
// }
// _contact<number>(1,3);
// _contact<string>('mk',"howlader");
var arr2 = [a, b, 123, 'merun'];
