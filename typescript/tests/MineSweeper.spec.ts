import { MineSweeper } from '../src/MineSweeper'

describe('MineSweeper', () => {
  it.skip('acceptance test', () => {
    const mineSweeper = new MineSweeper()

      let field = [
          ['*', '.', '.', '.'],
          ['.', '.', '*', '.'],
          ['.', '.', '.', '.'],
      ];
      let solution = mineSweeper.solve(4, 3, field);

      expect(solution).toBe([
          ['*', '2', '1', '1'],
          ['1', '2', '*', '1'],
          ['0', '1', '1', '1'],
      ]);
  });
})
