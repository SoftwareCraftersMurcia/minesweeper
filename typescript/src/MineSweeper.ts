export class MineSweeper {
    solve(xSize: number, ySize: number, field: string[][]): string[][] {
        const result: string[][] = []
        for (let i = 0; i < ySize; i++) {
            result.push([]);
            for (let j = 0; j < xSize; j++) {
                result[i].push('0');
            }
        }
        return result;
    }
}
