import { Example } from '../src/Example'

describe('kata-setup', () => {
  it('empty matrix', () => {
    const example = new Example()

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
