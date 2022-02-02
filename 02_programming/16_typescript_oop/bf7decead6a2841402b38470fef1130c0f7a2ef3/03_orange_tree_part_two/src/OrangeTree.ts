import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
    oranges: string[] = [];

    constructor(age: number, height: number, alive: boolean, oranges: string[]) {
        super(age);
        this.oranges = oranges;
    }

    ageOneYear(): void {
       
        if (this.alive) {
            this.age += 1;
        
            if (this.age >= 1 && this.age < 10) {
             this.height += 25;
             }
            if (this.age >= 10 && this.age <= 20) {
                this.height += 10;
            }
            if (this.age > 20) {
                this.height += 0;
            }
          
        }
        
    }
    isAlive(): void {
        if (this.alive === true) {
            this.alive = this.isAlive();
        }
    }
    growOranges(): void {
        for (let i = 0; i < 🍊.length; i++) {
            
        }
    }

}



// Leave the line below for tests to work properly.
export { OrangeTree };
