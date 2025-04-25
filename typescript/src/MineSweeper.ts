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
                let row = y + i;
                let column = x + j;
                if (row < 0 || row >= field.length || column < 0 || column >= field[row].length) {
                    continue;
                }
                if (field[row][column] === '*') {
                    count++;
                }
            }
        }
        return count.toString();
    }
}
