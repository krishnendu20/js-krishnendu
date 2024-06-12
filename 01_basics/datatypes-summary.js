// primitive

// 7 types: String ,Number,Boolean,null,undefined, symbol,Bigint

const score = 100
const scoreValue = 100.2

const isLoggedin = false

const outsideTemp = null
let userEmail;
const id = Symbol('456')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 26326252525n //linl to study:https://tc39.es/ecma262/#sec-ecmascript-language-source-code
// Reference(Not primitive)

// Array, objects, function

const heros = ["saktiman","Batman","spiderman","aquaman","superman"];

let myobj = {
    name: "Krishnendu",
    age: 22,

}

const myFunction = function()
{
    console.log("Hello Developers");
  
}
console.log (typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof  id);

 //************* */

 // stack(Primitive...copy) ,heap(Non-Primitive..reference)

 let myGitname ="krishnndu20"
 let anotherName = myGitname
anotherName = "20Krishnendu"
 console.log(anotherName);
 console.log(myGitname);

 let userOne = {
    email: "user@googl.com",
    upi: "user@ybl"
 }

 let userTwo= userOne

 userTwo.email = "krishnendu.dip.aiub@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);