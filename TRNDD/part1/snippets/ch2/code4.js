// Dispersing an object into constants with the spread operator

let object = { fruit: "apple", color: "green" };

let {fruit, color} = {...object};

console.log(`fruit: ${fruit}, color: ${color}`);

color = "red";

console.log(`object.color: ${object.color}, color: ${color}`);