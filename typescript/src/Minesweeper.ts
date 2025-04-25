export class Minesweeper {
    calculate(mat: string[][]): string[][] {
        let result: string[][] = [];
        for (let i = 0; i < mat.length; i++) {
            result.push([]);
            for (let j = 0; j < mat[i].length; j++) {
                result[i].push('0');
            }
        }

        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                const value = mat[i][j];
                if (value === '*') {
                    this.add1BombToAdjacentPositions(result, i, j);
                }
            }
        }

        return result
    }

    private add1BombToAdjacentPositions(result: string[][], i: number, j: number) {
        result[i][j] = "*";
        for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
                if (k === 0 && l === 0) {
                    continue
                }
                if (i + k < 0 || i + k >= result.length || j + l < 0 || j + l >= result[i].length) {
                    continue
                }
                result[i + k][j + l] = (parseInt(result[i + k][j + l]) + 1).toString();
            }
        }
    }
}
