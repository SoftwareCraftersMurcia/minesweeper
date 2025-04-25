export class Minesweeper {
    private readonly BOMB = '*';

    calculate(mat: string[][]): string[][] {
        let result = this.initializeMatrix(mat);

        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                const value = mat[i][j];
                if (value === this.BOMB) {
                    this.add1BombToAdjacentPositions(result, i, j);
                }
            }
        }

        return result
    }

    private initializeMatrix(mat: string[][]): string[][] {
        let result: string[][] = [];
        for (let i = 0; i < mat.length; i++) {
            result.push([]);
            for (let j = 0; j < mat[i].length; j++) {
                result[i].push('0');
            }
        }
        return result
    }

    private add1BombToAdjacentPositions(result: string[][], originPosX: number, originPosY: number) {
        for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
                if (k === 0 && l === 0) {
                    result[originPosX][originPosY] = this.BOMB;
                    continue
                }
                if (this.isOutOfBoundsTemp(result, originPosX + k, originPosY + l, originPosX)) {
                    continue
                }

                if (result[originPosX + k][originPosY + l] === this.BOMB) {
                    continue;
                }
                result[originPosX + k][originPosY + l] = (parseInt(result[originPosX + k][originPosY + l]) + 1).toString();
            }
        }
    }
    private isOutOfBoundsTemp(result: string[][], x: number, y: number, originPosX: number) {
        return x < 0 || x >= result.length || y < 0 || y >= result[originPosX].length;
    }
}
