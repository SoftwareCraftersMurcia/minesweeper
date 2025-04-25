export class MineSweeper {
    solve(xSize: number, ySize: number, field: string[][]): string[][] {
        const result: string[][] = []
        for (let y = 0; y < ySize; y++) {
            result.push([]);
            for (let x = 0; x < xSize; x++) {
                result[y].push(this.solvePosition(x, y, field));
            }
        }
        return result;
    }

    private solvePosition(x: number, y: number, field: string[][]) {
        if (field[y][x] === '*') {
            return '*';
        }
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let column = y + i;
                let row = x + j;
                if (column < 0 || column >= field.length || row < 0 || row >= field[column].length) {
                    continue;
                }
                if (field[column][row] === '*') {
                    count++;
                }
            }
        }
        return count.toString();
    }
}
