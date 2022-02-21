type ParamRest = string[];

export function greetEveryone(...ParamRest: string[]): void {
  // Code your function here
  console.log(`Welcome to ${ParamRest}`);
  
}
