export function humanPercentage(percentages: number[]): string[] {
    const result =  percentages.map((number) => `${Math.round(number * 100)}%`);
    
    return result;
}
