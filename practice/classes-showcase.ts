interface Greet {
    greet(otherName?: string): void;
}

class Student implements Greet {
    private readonly name: string;
    private readonly age: number;
    private avgGrade: number;

    public constructor(name?: string, age?: number, avgGrade?: number) {
        this.name = name ? name : "";
        this.age = age ? age : 0;
        this.avgGrade = avgGrade ? avgGrade : 0;
    }

    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    public getGrade(): number {
        return this.avgGrade;
    }

    public greet(otherName: string) {
        if (!otherName) {
            console.log(`Hi, I'm ${this.name}!`);
        }
        console.log(`Hi, ${otherName}, I'm ${this.name}!`);
    }

    public studentAbility(value: unknown): void {
        console.log("Here's length of unknown string: ", (value as string).length)
    }

    // public testReadonly() : void {
    //     this.name = "Joker";
    // } causes compilation error...
}

let student = new Student("Adam", 19, 8.0);
student.greet("Marie");
student.studentAbility("This string is unknown");


//generic class
class userWithId<T> {
    private _value: T | undefined;
    private readonly name: string;

    constructor(name?: string) {
        this.name = name ? name : "Default user id";
    }

    public setValue(value: T) {
        this._value = value;
    }
    public getValue(): T | undefined {
        return this._value;
    }

    public log(): string {
        return `${this.name}: ${this._value}`;
    }
}

let user = new userWithId<number>('admin');
user.setValue(999);
console.log(user.log()); 