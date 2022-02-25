import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
    const result = column(height, line(width));
    
    return result;
}
