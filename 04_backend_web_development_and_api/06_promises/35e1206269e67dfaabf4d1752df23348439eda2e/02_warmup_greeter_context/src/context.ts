import { greetEveryone } from "./greetEveryone";

type ParamRest = string[];
type CallbackType= (...restParam: ParamRest) => void;

export function contextFunction(callbackFunction : CallbackType, parameters: ParamRest): void {
  // Code your function here
 parameters.forEach((el) => console.log(`We now greet: ${el}`))
 callbackFunction(...parameters);
}
