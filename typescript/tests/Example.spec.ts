import {Minesweeper} from '../src/Minesweeper'

describe('kata-setup', () => {
    it('empty matrix returns all zeros', () => {
        const minesweeper = new Minesweeper()
        let emptyMineMat: string[][] = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]

        let result = minesweeper.calculate(emptyMineMat);

        let expected: string[][] = [
            ['0', '0', '0'],
            ['0', '0', '0'],
            ['0', '0', '0']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with bomb on 1:1', () => {
        const minesweeper = new Minesweeper()
        let singleMineMat: string[][] = [
            ['*', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]

        let result = minesweeper.calculate(singleMineMat);

        let expected: string[][] = [
            ['*', '1', '0'],
            ['1', '1', '0'],
            ['0', '0', '0']
        ]
        expect(result).toStrictEqual(expected)
    })
})
/*

* . . .
. . * .
. . . .

*/

/*

* 2 1 1
1 2 * 1
0 1 1 1

*/
