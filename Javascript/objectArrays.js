let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

console.log(`Darth Vader is allied to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon is a ${darthVader.weapon}`);
console.log(`Is Darth Vader a sith ${darthVader.sith ? Yes : No}`);
console.log(`Is Darth Vader a jedi ${darthVader.sith ? No : Yes}`);

let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("goodbye");
console.log(myArray.length);
myArray.shift();

for (let element of myArray){
    console.log(element);
};
