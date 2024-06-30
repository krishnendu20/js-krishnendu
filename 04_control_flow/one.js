//if

const isUserLoggedin = true

const temperature = 43

// if (temperature === 43) {
//     console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }
// <, >,<=,>=, ==,!=,===,!==

if (false) {
    
}
// var is globaly exicuted
// const score = 200
// if (score>100) {
//     let power = "fly"
//     console.log(`user power :${power}`);
// }
// console.log(`user power :${power}`);
// const balance = 1000
// if (balance>678) 
//     console.log("test"),console.log("test 2");  //implicit scope
// if (balance<500) {
//     console.log("less than");
// }else if (balance< 750) {
//     console.log("less than 750");
// } else if (balance<900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const UserLoggedin=true
const debitCard = true
const LoggedinFromGoogle = false
const LoggedinFromEmail = true

if (UserLoggedin && debitCard && 2==2) {
    console.log("Allow to buy");
}
if (LoggedinFromEmail || LoggedinFromGoogle || guestuser) {
    console.log("user logged in");
}
