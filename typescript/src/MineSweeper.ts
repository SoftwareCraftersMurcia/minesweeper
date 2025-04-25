export class MineSweeper {
    private readonly _MINE = '*';

    solve(field: string[][]): string[][] {
        const result: string[][] = []
        for (let y = 0; y < field.length; y++) {
            result.push([]);
            for (let x = 0; x < field[y].length; x++) {
                result[y].push(this.solvePosition(x, y, field));
            }
        }
        return result;
    }

    private solvePosition(x: number, y: number, field: string[][]) {
        if (this.containsAMine(y, x, field)) {
            return this._MINE;
        }
        let count = 0;
        for (let row = y - 1; row <= y + 1; row++) {
            for (let column = x - 1; column <= x + 1; column++) {
                if (this.containsAMine(row, column, field)) {
                    count++;
                }
            }
        }
        return count.toString();
    }

    private containsAMine(row: number, column: number, field: string[][]) {
        return this.isValidPosition(row, column, field) && field[row][column] === this._MINE;
    }

    private isValidPosition(row: number, column: number, field: string[][]) {
        return row >= 0 && row < field.length && column >= 0 && column < field[row].length;
    }
}
