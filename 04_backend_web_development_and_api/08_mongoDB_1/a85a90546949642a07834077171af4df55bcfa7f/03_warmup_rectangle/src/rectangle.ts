export function rectangle(width: number, height: number): string {
let area = "";
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            area += "*";
        }
            area += "\n"
    } 
   return area;
}

