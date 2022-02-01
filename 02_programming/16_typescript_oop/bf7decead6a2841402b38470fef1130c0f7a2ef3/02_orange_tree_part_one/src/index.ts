// Code the class here.
class Tree {
    age: number;
    height: number;
    alive: boolean = true;

    constructor(age: number) {
        this.age = age;
        
        if (this.age === 0){
            this.height = 0;
            //console.log(this.heigth)
        }
        if (this.age >= 1 && this.age <= 9) {
            this.height = this.age * 25;
            //console.log(this.heigth);
        }
        if (this.age >= 10 && this.age <= 20) {
            this.height = (this.age - 9) * 10 + 225;
            //console.log(this.heigth);
            
        }
        if (this.age > 20){
            this.height = 335;
            //console.log(this.heigth);
        }
    
        
       
    }

    seed():void {
    this.age = 0;
    this.height = 0;
    this.alive = true;

    }
}
const youngOrangeTree = new Tree(10);

console.log({youngOrangeTree})

// Leave the line below for tests to work properly.
export { Tree };
