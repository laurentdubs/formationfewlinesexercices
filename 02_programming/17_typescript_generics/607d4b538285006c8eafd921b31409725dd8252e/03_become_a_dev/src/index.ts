//import { stringify } from "querystring";
//import { DEFAULT_MAX_VERSION } from "tls";
//import { Z_HUFFMAN_ONLY } from "zlib";

type Human = {
    name: string;
    age: number;
    knowsDev: boolean;
}
type Dev = Human & {knownLanguage: string};

function becomeADev(object: Human): Dev {
    const result: Dev = {
        ...object,
        knowsDev: true,
        knownLanguage: "JavaScript",
    }
    
        return result;
  
}

//becomeADev(result);
//console.log(becomeADev());

// Leave the line below for tests to work properly.
export { becomeADev };
