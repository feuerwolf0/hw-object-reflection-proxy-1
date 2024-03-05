import orderByProps from "./functions";

const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
const myOrder = ["name", "level"];

console.log(orderByProps(obj, myOrder));
