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
        for (let row = y - 1; row <= y + 1; row++) {
            for (let column = x - 1; column <= x + 1; column++) {
                if (this.isValidPosition(row, column, field) && field[row][column] === '*') {
                    count++;
                }
            }
        }
        return count.toString();
    }

    private isValidPosition(row: number, column: number, field: string[][]) {
        return row >= 0 && row < field.length && column >= 0 && column < field[row].length;
    }
}
