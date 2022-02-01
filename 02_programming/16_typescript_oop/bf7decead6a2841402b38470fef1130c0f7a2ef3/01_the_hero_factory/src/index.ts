// Code the class here.
class Hero {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(name: string):string {
        return `I'm ${name}!`;
        
    }


}
const batman = new Hero("Batman");
console.log("Batman:", batman.name );





    






// Leave the line below for tests to work properly.
export { Hero };
