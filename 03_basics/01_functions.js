

function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()          //peramiter

// function addTwoNumbers(number1 , number2){
//   console.log(  number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
  }
const result = addTwoNumbers(3, 5)  //argument
// console.log("Result :",result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log( "enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vyubu"))
//rest op
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,455,322));

const user = {
    username : "loloklk",
    price : "554"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} an price id ${anyobject.price}`);
}

// handleObject(user)
const myNewArray = [200,344,234,567]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));