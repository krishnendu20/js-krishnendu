//Hi this is krishnendu
// Immediately Invoked Function Expression (IIFE)
// function immidietly invoked and to remove pollution from global scope
(function chai() {
    console.log(`DB CONNECTED`);  //named iife
}) ();

// ( () => {
//     console.log(`DB conn`);
// } ) ()

( (name) => {
    console.log(`DB conn two ${name}`);
} ) ('Krishnendu')  