import {greet} from "./index";

test("return Hello WORLD!", () => {
    expect.assertions(1);

    const result = greet();
    
    expect(result).toBe("Hello WORLD!");
    
})

test("return Hello FRANCIS!", () => {
    expect.assertions(1);

    if(true){
        
        const result = greet("Francis");
        expect(result).toBe("Hello FRANCIS!");
    }



    
})