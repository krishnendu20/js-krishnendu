//singleton always constructor ..Object.creat

//objects

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Krishnendu",
    "full name": "Niladro Das",
    [mySym]:"mykey1",
    age:24,
    location : "Bogura",
    email:"Krishnendu.dip.aiub@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abc@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "def@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 

