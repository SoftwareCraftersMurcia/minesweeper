import {Minesweeper} from '../src/Minesweeper'

describe('kata-setup', () => {
    let minesweeper: Minesweeper

    beforeEach(() => {
        minesweeper = new Minesweeper()
    })

    it('empty matrix returns all zeros', () => {
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

    it('matrix with bomb on 0:0', () => {
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

    it('matrix with bomb on 0:1 ', () => {
        let singleMineMat: string[][] = [
            ['.', '*', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]

        let result = minesweeper.calculate(singleMineMat);

        let expected: string[][] = [
            ['1', '*', '1'],
            ['1', '1', '1'],
            ['0', '0', '0']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with bomb in center ', () => {
        let singleMineMat: string[][] = [
            ['.', '.', '.'],
            ['.', '*', '.'],
            ['.', '.', '.']
        ]

        let result = minesweeper.calculate(singleMineMat);

        let expected: string[][] = [
            ['1', '1', '1'],
            ['1', '*', '1'],
            ['1', '1', '1']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with bomb in right limit ', () => {
        let singleMineInRightLimitMat: string[][] = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '*']
        ]

        let result = minesweeper.calculate(singleMineInRightLimitMat);

        let expected: string[][] = [
            ['0', '0', '0'],
            ['0', '1', '1'],
            ['0', '1', '*']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with two bombs ', () => {
        let twoMinesInMat: string[][] = [
            ['.', '.', '.'],
            ['*', '.', '*'],
            ['.', '.', '.']
        ]

        let result = minesweeper.calculate(twoMinesInMat);

        let expected: string[][] = [
            ['1', '2', '1'],
            ['*', '2', '*'],
            ['1', '2', '1']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with two adjacent bombs ', () => {
        let twoMinesInMat: string[][] = [
            ['.', '.', '.'],
            ['.', '.', '*'],
            ['.', '.', '*']
        ]

        let result = minesweeper.calculate(twoMinesInMat);

        let expected: string[][] = [
            ['0', '1', '1'],
            ['0', '2', '*'],
            ['0', '2', '*']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with all bombs should return all bombs', () => {
        let allBombs: string[][] = [
            ['*', '*', '*'],
            ['*', '*', '*'],
            ['*', '*', '*']
        ]

        let result = minesweeper.calculate(allBombs);

        let expected: string[][] = [
            ['*', '*', '*'],
            ['*', '*', '*'],
            ['*', '*', '*']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with all bombs except one center should count 8', () => {
        let allBombs: string[][] = [
            ['*', '*', '*'],
            ['*', '.', '*'],
            ['*', '*', '*']
        ]

        let result = minesweeper.calculate(allBombs);

        let expected: string[][] = [
            ['*', '*', '*'],
            ['*', '8', '*'],
            ['*', '*', '*']
        ]
        expect(result).toStrictEqual(expected)
    })

    it('matrix with all bombs should return all bombs', () => {
        let allBombs: string[][] = [
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*']
        ]

        let result = minesweeper.calculate(allBombs);

        let expected: string[][] = [
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*']
        ]
        expect(result).toStrictEqual(expected)
    })
})
