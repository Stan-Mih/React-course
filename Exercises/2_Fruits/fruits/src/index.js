import { choice, remove } from "./helpers";
import fruits from "./food";

const foods = fruits;
const currItem = choice(foods);

console.log(`I'd like a ${currItem} please.`);
console.log(`Here you go your ${currItem}.`);
console.log("Delicious, my I have another one?");
remove(foods, currItem);
console.log(`I'm sorry we have these fruts left: ${foods}`);
