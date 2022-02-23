type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const Name = name.split(" ");
  return { firstName: Name[0], lastName: Name[1] };
}
