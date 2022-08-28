// Code your solutions in this file

// for (let age= 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }

// for (let age=10; age < 18; age++) {
//     console.log(`Sorry mate you are only ${age} years old and cannot buy beer yet`);
//     }

// const gifts =["teddy bear","drone","doll","beyblade","Rope","Walkie Talkie"];

// function wrapGifts(gifts){
//     for (let i=0; i < gifts.length;  i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts)

let names=['Lisa','Kaitlin','Jan'];
let eventMsg='surprise'; 

function writeCards (names,eventMsg) {
    let newNamesArray= [];

    for (let i=0; i < names.length; i++){
        newNamesArray.push(`Thank you, ${names[i]}, for the wonderful ${eventMsg} gift!`)
    }
    return newNamesArray;
}

function countDown(num) {
while (num >= 0) {
    console.log(num);
    num--;
}
return countDown
}
