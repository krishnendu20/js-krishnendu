const grade = [1,2,3,4]

// const myTotal =grade.reduce(function (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = grade.reduce(  (acc,curr)=>(acc+curr),1)

console.log(myTotal);

const shoppingCart =  [
    {
        itemName : "js course",
        price: 1455
    },
    {
        itemName : "py course",
        price: 1498
    },
    {
        itemName : "dsa course",
        price: 1896
    },
    {
        itemName : "oop course",
        price: 1296
    },
    
]

const priceTOpay = shoppingCart.reduce(  (acc, item) =>acc + item.price,0 )
console.log(priceTOpay);