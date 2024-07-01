const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Dont have user email");
}

// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//  truthy values
// "0",'false'," ",[],{},function(){}

// if (userEmail.length ===0) {
//     console.log("Array is Empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is Empty");
}

//Nullish coalscing operator(??): null undefined

let val1;
// val1 = 5 ?? 10

// val1= null ?? 111110
// val1 = undefined ?? 123
val1 = null ?? 10 ?? 34 


console.log(val1);

//Terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

