//some basic data types, not much different from js
let str : string = "Hello world!";
const num: number = 52;
let flag: boolean = false;
const arr: number[] = [1, 2, 3, 4, 5];

//now more complex data types: objects
let person = {
    name: "Adam",
    age: 18,
    isStudent: true,
    sayHello() : string{
        return `Hi, I'm ${this.name}!`;
    }
}
function greetPerson(person: {name:string; age:number; isStudent:boolean; sayHello:Function}) : void {
    console.log(`Now ${person.name} will greet you. ` + person.sayHello())
}
greetPerson(person);

//an example of tuples
let personTuple : [string, number, boolean, Function];
personTuple = [person.name, person.age, person.isStudent, person.sayHello];

//any type
let randVar : any = "anything can be here";
//randVar.sayHello(); //doesn't cause compilation error, but runtime one
//randVar.mathGrade = 5; //and this either

//unknown type
let someResult: unknown = "there's a string in unknown";
//someResult.toUpperCase(); //now this causes a compilation error, but can be easily fixed:
function isUnknownStr(result: unknown): string {
    if(typeof result === "string"){
        return result.toUpperCase();
    }
    return "The value was not a string...";
}
console.log(isUnknownStr(someResult));

//void type
function voidTypeShowcase() : void {
    console.log("This doesn't return anything")
}
voidTypeShowcase();

//never type
function error(message: string): never {
    throw new Error(message); //never returning anything
}
function infinity(): never {
    while (true) { //never ending
    }
}
error("Error example with never, not a real one :)");