// for of ......forin....for use array

const arr = [9,8,7,6,5,4,3]

for (const num of arr) {
    // console.log(num);
}

const argentina ="leo messi goat emi otamendi,martinez alvarez"

for (const player of argentina) {
    // console.log(`Each player is ${player}`);
}

// maps

// const map = new Map()
// map.set('dhaka','Bangladesh')
// map.set('delhi','India')
// map.set('Thimpu','Bhutan')
// map.set('Thimpu','Bhutan')

// console.log(map);

// for(const [key , value] of map){
//     // console.log(key,':-',value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2 : 'Vice City',
//     game3 : 'Max-Pain',
//     game4 : 'FIFA 22'

// }
// for (const [key , value] of myObject) {
//     console.log(key, ':-',value);
// }
// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
        
//     }

//     const programing = ["js","rb","py","java","cpp"]

//     for (const key in programing) {
//        console.log(programing[key]);
//     }

    const map = new Map()
    map.set('por',"portugal")
    map.set('sri',"srilanka")
    map.set('jap',"japan")
    map.set('Eng',"England")

    for (const [key,value] in map) {
        console.log(key, ':-', value);
    }