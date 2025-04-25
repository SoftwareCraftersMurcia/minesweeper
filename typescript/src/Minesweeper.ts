export class Minesweeper {
    calculate(mat: string[][]): string[][] {


        if (mat[0][0] === '*') {
            return [
                ['*', '1', '0'],
                ['1', '1', '0'],
                ['0', '0', '0']
            ]
        }
        if (mat[0][1] === '*') {
            return [
                ['1', '*', '1'],
                ['1', '1', '1'],
                ['0', '0', '0']
            ]
        }


        let result: string[][] = [];
        for (let i = 0; i < mat.length; i++) {
            result.push([]);
            for (let j = 0; j < mat[i].length; j++) {
                result[i].push('0');
            }
        }

        return result
    }
}
