import { Minesweeper } from '../src/Minesweeper'

describe('kata-setup', () => {
  it('empty matrix returns all zeros', () => {
    const example = new Minesweeper()

      let mat: string[][] = [
          ['.', '.', '.'],
          ['.', '.', '.'],
          ['.', '.', '.']
      ]

      let expected: string[][] = [
          ['0', '0', '0'],
          ['0', '0', '0'],
          ['0', '0', '0']
      ]

    expect(example.calculate(mat)).toStrictEqual(expected)
  })

    it('matrix with bomb on 1:1', () => {
    const example = new Minesweeper()

      let mat: string[][] = [
          ['*', '.', '.'],
          ['.', '.', '.'],
          ['.', '.', '.']
      ]

      let expected: string[][] = [
          ['*', '1', '0'],
          ['1', '1', '0'],
          ['0', '0', '0']
      ]

    expect(example.calculate(mat)).toStrictEqual(expected)
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
