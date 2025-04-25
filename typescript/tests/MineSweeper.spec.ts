import { MineSweeper } from '../src/MineSweeper'

describe('MineSweeper', () => {
    it('a field with no mines has all the solution as zeros', () => {
        const mineSweeper = new MineSweeper()

        let field = [
            ['.', '.', '.', '.'],
            ['.', '.', '.', '.'],
            ['.', '.', '.', '.'],
        ];
        let solution = mineSweeper.solve(field);

        expect(solution).toEqual([
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
            ['0', '0', '0', '0'],
        ]);
    });

    it('a field with 1 mine in the center has all adjacent to 1', () => {
        const mineSweeper = new MineSweeper()

        let field = [
            ['.', '.', '.', '.'],
            ['.', '.', '*', '.'],
            ['.', '.', '.', '.'],
        ];
        let solution = mineSweeper.solve(field);

        expect(solution).toEqual([
            ['0', '1', '1', '1'],
            ['0', '1', '*', '1'],
            ['0', '1', '1', '1'],
        ]);
    });

    it('a field with all mines returns all mines', () => {
        const mineSweeper = new MineSweeper()

        let field = [
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*'],
        ];
        let solution = mineSweeper.solve(field);

        expect(solution).toEqual([
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*'],
            ['*', '*', '*', '*'],
        ]);
    });

    it('acceptance test', () => {
        const mineSweeper = new MineSweeper()

        let field = [
            ['*', '.', '.', '.'],
            ['.', '.', '*', '.'],
            ['.', '.', '.', '.'],
        ];
        let solution = mineSweeper.solve(field);

        expect(solution).toStrictEqual([
            ['*', '2', '1', '1'],
            ['1', '2', '*', '1'],
            ['0', '1', '1', '1'],
        ]);
    });
})
