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
                if (value ==='*'){
                    result[i][j] = "*";

                    if(i === 0 && j === 0) {
                        result[0][1] = "1";
                        result[1][0] = "1";
                        result[1][1] = "1";
                    }

                    if(i === 0 && j === 1) {
                        result[0][0] = "1";
                        result[0][2] = "1";
                        result[1][0] = "1";
                        result[1][1] = "1";
                        result[1][2] = "1";
                    }
                }
            }
        }

        return result
    }
}
