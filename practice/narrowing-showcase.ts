type Cat = {
    type: "cat";
    legs: 4;
    food: "meat";
    sayMeow(): void;
}
type Bird = {
    type: "bird";
    food: "worms";
    sayChirp(): void;
}
type Fish = {
    type: "fish";
    food: "worms";
    swim(): void;
}

type Animal = {
    eyes?: number;
    food: "meat" | "worms";
} & (Cat | Bird | Fish); //example of discriminated union: variable cat can't have food: "worms"

let cat: Animal = {
    eyes: 2,
    type: "cat",
    legs: 4,
    food: "meat",
    sayMeow(){
        console.log("Meow meow!");
    }
}
let bird: Animal = {
    eyes: 2,
    type: "bird",
    food: "worms",
    sayChirp(){
        console.log("Chirp chirp!");
    }
}
let fish: Animal = {
    type: "fish",
    food: "worms",
    swim(){
        console.log("Fish swims away...");
    }
}

if(typeof cat.eyes === "number"){ //typeof
    console.log("Cat has", cat.eyes as unknown as string, "eyes.")
}
if(!fish.eyes){ //truthiness
    console.log("Oops! Forgot to give poor fish its eyes :(");
}
if(bird.eyes != null){ //equality
    console.log("Seems that birds' eyes are not null or undefined.");
}
if(!("swim" in cat)){ //using in
    console.log("All good, a cat doesn't have 'swim()' method!")
}
if(bird instanceof Object && cat instanceof Object && fish instanceof Object){//instanceof
    console.log("All created here 'animals' are objects.")
}

function isFish(pet: Cat | Fish): pet is Fish { //type predicates
  return (pet as Fish).swim !== undefined;
}
if(isFish(fish)){
    fish.swim();
}