export function column(numberOfLines: number, lineContent: string): string {
    let character = "";

    for (let i = 0; i < numberOfLines; i++) {
        character += `${lineContent}\n`;
    }
    return character;

}
