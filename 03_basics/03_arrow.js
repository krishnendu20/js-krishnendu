const user = {
    username : "krishnendu",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
         console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "powlomi"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "golmal"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "golmal"
//     console.log(this.username);   
// }
// chai()

const chai = () =>  {
    let username = "golmal"
    console.log(this.username);   
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// } curlybrises ---return ....explicit return

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => {username:"krish"}
console.log(addTwo(3, 4));  //implicit return
