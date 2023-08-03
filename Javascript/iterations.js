"use strict";

let A = 100;

while(A <= 200){
    A++;
    console.log(`A = ${A}`);
}

let a = 100;

while(a <= 200){
    if (a%2 == 0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
    a++;
}

for (let i = 0; i < 10; i++){
    for (let j = 1; j <= 10; j++) {
        console.log(j)
    }

}

for(let A2 = 100; A2 <= 200; A2++){
    console.log(`A = ${A}`);
}

for(let a2 = 100; a2 <= 200; a2++){
    if (a%2 == 0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
}