const receivedObject = {
   a: 'somestring',
   b: 42
  }

type ReceivedObject = {
    a: string;
    b: number;
}
 
function transformObject(receivedObject: ReceivedObject): (string | number)[] {

    return Object.values(receivedObject);    
}
 
 
//const transformObject = "coucou";
// Leave the line below for tests to work properly.
export { transformObject };
