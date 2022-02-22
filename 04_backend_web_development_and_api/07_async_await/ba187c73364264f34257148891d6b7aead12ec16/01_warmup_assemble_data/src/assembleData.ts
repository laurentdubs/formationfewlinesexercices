type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names: string[], ages: number[], countries: string[], haveTraveled: boolean[]): Profile[] {
  const profile = [];

  for (let i = 0; i < names.length; i++) {
    profile.push({
      name: names[i], 
      age: ages[i],
      country: countries[i],
      haveTraveled: haveTraveled[i],
    })
  }
    
  return profile;
}
