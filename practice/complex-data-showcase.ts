enum Coordinates {
    X,
    Y,
    Z
}

type Position = [number, number, number]; //an example of type aliace here also
interface Person { //and an interface
    position: Position;
}
let player: Person = { position: [0, 0, 0] };

function movePerson(player: Person, coords: Coordinates, steps: number): void {
    player.position[coords] += steps;
}

movePerson(player, Coordinates.X, 5);
movePerson(player, Coordinates.Y, -2);
movePerson(player, Coordinates.Z, 3);
console.log("The player is now at:", player.position); //will be 'The player is now at: [ 5, -2, 3 ]'


interface Enemy {
    attackPower: number | null; //union type, can not have attack power
    attack(): void;
}
let enemy: Person & Enemy = { //intersection type
    position: [1, 1, 1],
    attackPower: 5,
    attack(){
        console.log("Player got " + this.attackPower + " damage!");
    }
}
enemy.attack();


//and some generics below
function logCoordinates<T>(value: T): T {
    console.log("Coordinates:", value);
    return value;
}
logCoordinates<Position>(player.position);
logCoordinates<Position>(enemy.position);