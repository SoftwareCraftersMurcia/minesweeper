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

    it('matrix with bomb on 0:0', () => {
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

    it('matrix with bomb on 0:1 ', () => {
        const minesweeper = new Minesweeper()
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
        const minesweeper = new Minesweeper()
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
        const minesweeper = new Minesweeper()
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


})
