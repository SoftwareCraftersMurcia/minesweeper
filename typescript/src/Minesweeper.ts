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
                    result[i][j] = "*";

                    if (i === 0 && j === 0) {
                        result[i][j + 1] = "1";
                        result[i + 1][j] = "1";
                        result[i + 1][j + 1] = "1";
                    }

                    if (i === 0 && j === 1) {
                        result[i][j - 1] = "1";
                        result[i][j + 1] = "1";
                        result[i + 1][j - 1] = "1";
                        result[i + 1][j] = "1";
                        result[i + 1][j + 1] = "1";
                    }

                    for (let k = -1; k < 1; k++) {
                        for (let l = -1; l < 1; l++) {
                            if (k === 0 && l === 0) {
                                continue
                            }
                            result[k][l] = "1";
                        }
                    }
                    // if (i === 1 && j === 1) {
                    //     result[i - 1][j - 1] = "1";
                    //     result[i - 1][j] = "1";
                    //     result[i - 1][j + 1] = "1";
                    //     result[i][j - 1] = "1";
                    //     result[i][j + 1] = "1";
                    //     result[i + 1][j - 1] = "1";
                    //     result[i + 1][j] = "1";
                    //     result[i + 1][j + 1] = "1";
                    // }
                }
            }
        }

        return result
    }
}
